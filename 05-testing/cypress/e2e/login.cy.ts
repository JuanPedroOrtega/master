describe('Login Scene E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/#/login');
  });

  it('should show validation error when submitting empty form', () => {
    cy.findByRole('button', { name: /login/i }).click();

    cy.findAllByText('Debe informar el campo').should('have.length', 2);
  });

  it('should allow user to type username', () => {
    cy.findByRole('textbox', { name: /usuario/i }).type('admin');

    cy.findByRole('textbox', { name: /usuario/i }).should(
      'have.value',
      'admin'
    );
  });

  it('should show invalid credentials message', () => {
    cy.findByRole('textbox', { name: /usuario/i }).type('wrong');
    cy.findByLabelText(/contraseña/i).type('wrong');

    cy.findByRole('button', { name: /login/i }).click();

    cy.findByText('Usuario y/o password no válidos').should('be.visible');
  });
});
