describe('Restaurants test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Visits the restaurants page', () => {
    cy.contains('restaurants are waiting for you');
    const restaurantsList = cy.get('[id=restaurants-list]');
    restaurantsList.children().should('have.length.gte', 1);
  });

  it('Can go to meals page', () => {
    cy.get('[id=restaurants-list]').children().first().click();
    cy.get('[data-cy=restaurant-name]').should('be.visible');
    cy.get('[data-cy=restaurant-description]').should('be.visible');
    const mealsList = cy.get('[data-cy=meal-list]');
    mealsList.children().should('have.length.gte', 1);
  });
});
