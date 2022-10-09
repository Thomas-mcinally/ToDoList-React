//requires you to 'npm start' first to host website locally
var randomstring = require('randomstring')
const myRandomString1 = randomstring.generate();
const myRandomString2 = randomstring.generate();

describe('local storage capability of to-do list app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('still added elements in correct order when reload', () => {
      cy.findByTestId('todo-input-box').type(myRandomString1)
      cy.findByTestId('add-todo-button').click()
      cy.findByTestId('todo-input-box').type(myRandomString2)
      cy.findByTestId('add-todo-button').click()
      cy.reload()
      cy.findByTestId('todo-list').children().get('li').eq(0).should('have.text', myRandomString2)
      cy.findByTestId('todo-list').children().get('li').eq(1).should('have.text', myRandomString1)
    })

    it('doesnt show deleted items after reload', () => {
      cy.findByTestId('todo-input-box').type(myRandomString1)
      cy.findByTestId('add-todo-button').click()
      cy.findByTestId('todo-delete-button').click()
      cy.reload()
      cy.findByTestId('todo-input-box') // need to look for something to finalize the reload
      cy.contains(myRandomString1).should('not.exist')
    })
  })

  