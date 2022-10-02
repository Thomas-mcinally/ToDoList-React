//requires you to 'npm start' first to host website locally

describe('local storage capability of to-do list app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('that when reload page elements are still there', () => {
        cy.findByTestId('todo-input-box').type('1')
        cy.findByTestId('add-todo-button').click()
        cy.reload()
        cy.findByTestId('todo-list').children().get('li').first().should('have.text', '1')
    })
  })
  