beforeEach(() => {
  cy.fixture('mockData').then((marsData) => {
    cy.intercept(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=9sRsIjAG7N8bqqRQAKa62riI2qnxklLWIs4DcDvX',
      marsData
    );
  });

  cy.visit('http://localhost:3000/');
});

describe('Homepage', () => {
  it('Should render the Spacetagram homepage', () => {
    cy.get('h1').contains('SPACESTAGRAM');
  });

  it('Should show a button for favorites and a button for all', () => {
    cy.get('.fav-btn').should('be.visible');
    cy.get('.all-btn').should('be.visible');
  });

  it('Should show cards with an image and description and a like-heart', () => {
    cy.get('img').first().should('be.visible');
    cy.get('.description').should('be.visible');
    cy.get('.fa-heart').first().should('be.visible');
  });

  it('The favorites button should show no images to start', () => {
    cy.get('.fav-btn').click().get('.card').should('not.exist');
  });

  it('Clicking the like heart should change the color of the heart to red', () => {
    cy.get('.fa-heart').first().click().get('.favorite');
  });

  it('After adding a favorite, clicking the my favorites button should show all favorites', () => {
    cy.get('.fa-heart').first().click();
    cy.get('.fav-btn').click().get('.card').should('have.length', 1);
  });

  it('Clicking the heart a second time should change the color and remove the image as a favorite', () => {
    cy.get('.fa-heart').first().click();
    cy.get('.fav-btn').click().get('card').should('not.exist');
  });

  it('Clicking the show all button should return to all images', () => {
    cy.get('.all-btn').click().get('.card').should('have.length', 6);
  });
});
