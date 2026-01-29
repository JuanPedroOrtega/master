import { Component, OnDestroy, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RotateDirective } from '../../directives/rotate.directive';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, MatButtonModule, MatIconModule, MatChipsModule, RotateDirective],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery implements OnInit, OnDestroy {
  constructor(
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  images: GalleryImage[] = [
    { id: 1, src: '/gallery/1.jpg', title: 'Imagen 1' },
    { id: 2, src: '/gallery/2.jpg', title: 'Imagen 2' },
    { id: 3, src: '/gallery/3.jpg', title: 'Imagen 3' },
    { id: 4, src: '/gallery/4.jpg', title: 'Imagen 4' },
    { id: 5, src: '/gallery/5.jpg', title: 'Imagen 5' },
    { id: 6, src: '/gallery/6.jpg', title: 'Imagen 6' },
    { id: 7, src: '/gallery/7.jpg', title: 'Imagen 7' },
    { id: 8, src: '/gallery/8.jpg', title: 'Imagen 8' },
  ];

  currentIndex = 0;
  isPlaying = false;
  private intervalId?: number;
  animationDirection: 'next' | 'prev' | 'none' = 'none';
  rotationDegrees = 0;
  
  speeds = [
    { label: 'Muy Lento', value: 3000 },
    { label: 'Lento', value: 2000 },
    { label: 'Normal', value: 1500 },
    { label: 'Rápido', value: 1000 },
    { label: 'Muy Rápido', value: 500 },
  ];
  currentSpeedIndex = 2;

  get currentImage(): GalleryImage {
    return this.images[this.currentIndex];
  }

  get previousImage(): GalleryImage {
    const prevIndex = this.currentIndex === 0 
      ? this.images.length - 1 
      : this.currentIndex - 1;
    return this.images[prevIndex];
  }

  get nextImage(): GalleryImage {
    const nextIndex = (this.currentIndex + 1) % this.images.length;
    return this.images[nextIndex];
  }

  get currentSpeed(): number {
    return this.speeds[this.currentSpeedIndex].value;
  }

  get currentSpeedLabel(): string {
    return this.speeds[this.currentSpeedIndex].label;
  }

  get canSpeedUp(): boolean {
    return this.currentSpeedIndex < this.speeds.length - 1;
  }

  get canSlowDown(): boolean {
    return this.currentSpeedIndex > 0;
  }

  ngOnInit(): void {}

  private startCarousel(): void {
    this.stopCarousel();
    this.isPlaying = true;
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = window.setInterval(() => {
        this.ngZone.run(() => {
          this.next();
        });
      }, this.currentSpeed);
    });
  }

  private stopCarousel(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  play(): void {
    if (!this.isPlaying) {
      this.startCarousel();
    }
  }

  pause(): void {
    this.isPlaying = false;
    this.stopCarousel();
  }

  next(): void {
    this.animationDirection = 'next';
    this.cdr.detectChanges();
    
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.cdr.detectChanges();
      
      setTimeout(() => {
        this.animationDirection = 'none';
        this.cdr.detectChanges();
      }, 500);
    }, 100);
  }

  previous(): void {
    this.animationDirection = 'prev';
    this.cdr.detectChanges();
    
    setTimeout(() => {
      this.currentIndex = this.currentIndex === 0 
        ? this.images.length - 1 
        : this.currentIndex - 1;
      this.cdr.detectChanges();
      
      setTimeout(() => {
        this.animationDirection = 'none';
        this.cdr.detectChanges();
      }, 500);
    }, 100);
  }

  speedUp(): void {
    if (this.canSpeedUp) {
      this.currentSpeedIndex++;
      if (this.isPlaying) {
        this.startCarousel();
      }
    }
  }

  slowDown(): void {
    if (this.canSlowDown) {
      this.currentSpeedIndex--;
      if (this.isPlaying) {
        this.startCarousel();
      }
    }
  }

  rotateLeft(): void {
    this.rotationDegrees -= 90;
  }

  rotateRight(): void {
    this.rotationDegrees += 90;
  }

  resetRotation(): void {
    this.rotationDegrees = 0;
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }
}
