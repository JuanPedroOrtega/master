import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { StorageService } from '../../services/storage.service';
import { ValidationHelpers } from '../../shared/validation-helpers';

interface Contact {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
}

interface ContactsStorage {
  contacts: Contact[];
  nextId: number;
}

@Component({
  selector: 'app-crud',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule
  ],
  templateUrl: './crud.html',
  styleUrl: './crud.scss',
})
export class Crud {
  contactForm: FormGroup;
  contacts: Contact[] = [];
  nextId = 1;
  hideWithoutPhone = false;
  editingId: number | null = null;
  private readonly STORAGE_KEY = 'crud_contacts';

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService
  ) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.pattern(/^[0-9]{9}$/)]
    });
    
    this.loadFromStorage();
  }

  get filteredContacts(): Contact[] {
    if (this.hideWithoutPhone) {
      return this.contacts.filter(c => c.telefono);
    }
    return this.contacts;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      if (this.editingId !== null) {
        this.updateContact();
      } else {
        this.addContact();
      }
    }
  }

  addContact(): void {
    const newContact: Contact = {
      id: this.nextId++,
      ...this.contactForm.value
    };
    this.contacts.push(newContact);
    this.contactForm.reset();
    this.saveToStorage();
  }

  editContact(contact: Contact): void {
    this.editingId = contact.id;
    this.contactForm.patchValue({
      nombre: contact.nombre,
      email: contact.email,
      telefono: contact.telefono
    });
  }

  updateContact(): void {
    const index = this.contacts.findIndex(c => c.id === this.editingId);
    if (index !== -1) {
      this.contacts[index] = {
        id: this.editingId!,
        ...this.contactForm.value
      };
    }
    this.cancelEdit();
    this.saveToStorage();
  }

  deleteContact(id: number): void {
    this.contacts = this.contacts.filter(c => c.id !== id);
    if (this.editingId === id) {
      this.cancelEdit();
    }
    this.saveToStorage();
  }

  cancelEdit(): void {
    this.editingId = null;
    this.contactForm.reset();
  }

  getErrorMessage(field: string): string {
    const control = this.contactForm.get(field);
    return ValidationHelpers.getErrorMessage(field, control?.errors);
  }

  private saveToStorage(): void {
    const data: ContactsStorage = {
      contacts: this.contacts,
      nextId: this.nextId
    };
    this.storageService.save(this.STORAGE_KEY, data);
  }

  private loadFromStorage(): void {
    const data = this.storageService.load<ContactsStorage>(this.STORAGE_KEY);
    if (data) {
      this.contacts = data.contacts || [];
      this.nextId = data.nextId || 1;
    }
  }
}
