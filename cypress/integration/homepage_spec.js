beforeEach(() => {
  cy.visit('http://localhost:3000');
});

describe('Homepage', () => {
  it('Should render the Spacetagram homepage', () => {
    cy.get('h1').contains('SPACESTAGRAM');
  });

  it('Should show cards with an image and description and a like-heart', () => {
    cy.get('card').first().contains('img');
    cy.get('card').first().contains('.description');
    cy.get('card').first().contains('.fa-heart');
  });

  it('Should show a button for favorites and a button for all', () => {
    cy.get('button').eq(2);
  });

  it('Clicking the like heart should change the color of the heart to red', () => {
    cy.get('.card').first().contains('.fa-heart').click().get('favorite');
  });

  it('The favorites button should show no images to start', () => {
    cy.get('.fav-btn').click().get('.card').should('not.be.visible');
  });

  it('After adding a favorite, clicking the my favorites button should show all favorites', () => {
    cy.get('.fa-heart').first().click();
    cy.get('fav-button').click().get('card').should('be.visible');
  });

  it('Clicking the heart a second time should change the color and remove the image as a favorite', () => {
    cy.get('.fa-heart').first().click();
    cy.get('fav-button').click().get('card').should('not.be.visible');
  });

  it('Clicking the show all button should return to all images', () => {
    // cy.get('all-button').click()
  });
});
