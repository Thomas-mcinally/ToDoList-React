//requires you to 'npm start' first to host website locally

describe('dark/light mode toggle feature of to-do list app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('is in dark mode initially', () => {

      cy.get('body').should('have.class', 'dark')

    })

    it('is able to switch to lightmode and then back to dark mode', () => {

      const backgroundButton = cy.findByTestId('dark-light-mode-button')

      backgroundButton.click()

      cy.get('body').should('have.class', 'light')

      backgroundButton.click()

      cy.get('body').should('have.class', 'dark')

    })
  }) 
  