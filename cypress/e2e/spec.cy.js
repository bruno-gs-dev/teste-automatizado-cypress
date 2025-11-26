// teste de como funciona o cypress
describe('Testes de acessos', () => { // descrição do teste
  it('Acessa o Google e verifica o título', () => { // caso de teste
    cy.visit('https://www.google.com.br'); // acessa o google
    cy.title().should('include', 'Google'); // verifica o título
  });

  it('Acessa a Youtube e verifica o título', () => { // caso de teste
    cy.visit('https://www.youtube.com/watch?v=kOanBE5Wg24'); // acessa o google
    cy.title().should('include', 'BABYMOER'); // verifica o título
  });
});
// fim do teste - se passar, o cypress mostrará em verde.
