import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Auth } from '../../services/auth';
import { ValidationHelpers } from '../../shared/validation-helpers';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  authService = inject(Auth);
  profileForm: FormGroup;
  isEditing = false;
  successMessage = '';

  username$ = this.authService.username$;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      username: [this.authService.getUsername(), [Validators.required, Validators.minLength(3)]]
    });
  }

  enableEdit(): void {
    this.isEditing = true;
    this.successMessage = '';
    this.profileForm.patchValue({
      username: this.authService.getUsername()
    });
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.successMessage = '';
    this.profileForm.patchValue({
      username: this.authService.getUsername()
    });
  }

  saveChanges(): void {
    if (this.profileForm.valid) {
      const newUsername = this.profileForm.value.username;
      this.authService.updateUsername(newUsername);
      this.isEditing = false;
      this.successMessage = 'Nombre actualizado correctamente';
      
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    }
  }

  getErrorMessage(): string {
    const control = this.profileForm.get('username');
    return ValidationHelpers.getErrorMessage('nombre', control?.errors);
  }
}
