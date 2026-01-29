export class ValidationHelpers {
  static getErrorMessage(field: string, errors: any): string {
    if (errors['required']) {
      return `El campo ${field} es obligatorio`;
    }
    if (errors['email']) {
      return 'El email no es válido';
    }
    if (errors['minlength']) {
      return `El campo ${field} debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
    }
    if (errors['pattern']) {
      return `El formato de ${field} no es válido`;
    }
    return '';
  }
}
