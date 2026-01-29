describe('Login Scene E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display login form', () => {
    cy.contains('Login').should('be.visible');
  });

  it('should show validation error when submitting empty form', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Required').should('exist');
  });

  it('should allow user to type username', () => {
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="username"]').should('have.value', 'admin');
  });

  it('should allow user to type password', () => {
    cy.get('input[name="password"]').type('test123');
    cy.get('input[name="password"]').should('have.value', 'test123');
  });

  it('should navigate to submodule list on successful login', () => {
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('test');
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', '/submodule-list');
  });

  it('should display error message on invalid credentials', () => {
    cy.get('input[name="username"]').type('wronguser');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();
    
    cy.contains('Invalid credentials').should('be.visible');
  });
});
