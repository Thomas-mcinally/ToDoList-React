//requires you to 'npm start' first to host website locally

describe('dark/light mode toggle feature of to-do list app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('is in light mode initially', () => {

      cy.get('body').should('have.class', 'light')

      const backgroundButton = cy.findByTestId('dark-light-mode-button')

      backgroundButton.click()

      cy.get('body').should('have.class', 'dark')

      backgroundButton.click()

      cy.get('body').should('have.class', 'light')

    })

    it('is able to switch to darkmode and then back to light mode', () => {

      const backgroundButton = cy.findByTestId('dark-light-mode-button')

      backgroundButton.click()

      cy.get('body').should('have.class', 'dark')

      backgroundButton.click()

      cy.get('body').should('have.class', 'light')

    })
  }) 
  