describe('Order Page', () => {
  beforeEach(()=>{
    //cypress.config.js >> baseUrl olarak ekledim
    cy.visit('/')
  })
  describe('Error Message', () => {
  it('Name input', () => {
    //Arrange
    //Act
    const validName = 'abc'; 
    cy.get('[data-cy="isim-input"]').clear().type(validName);
    //assert
    cy.contains('Adınız en az 3 karakter olmalıdır.').should('not.exist');
  });
  it('Malzeme input', () => {
    //Arrange
    //Act
    cy.get('[data-cy="malzeme-input"]').check('Pepperoni');
    //assert
    cy.contains('Pepperoni');
})
it('Submit disabled', () => {
  //Arrang
  //Act
  cy.get('[data-cy="submit-input"]').click({force: true});
  //assert
  cy.get('[data-cy="submit-input"]').should('be.disabled');
})
});
describe('Form input valideted', () => {
  it('Name input', () => {
    //Arrange
    //Act
    cy.get('[data-cy="isim-input"]').clear().type("Bilun");
    cy.get('[data-cy="malzeme-input"]').check('Pepperoni');
    //assert
    cy.get('.order-contaButton').should('have.class', 'disabled');

  });
})
})