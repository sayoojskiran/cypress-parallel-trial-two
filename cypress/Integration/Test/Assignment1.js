///<reference types="cypress"/>
require('cypress-xpath')
describe("My first multipledata",()=>{
    it("driving multiple sets",()=>{
        cy.visit('https://parabank.parasoft.com/')
        //cy.contains('Register').should('')
        cy.contains('Register').click()
        cy.xpath('//input[@id="customer.firstName"]').type('Sayooj')
        cy.xpath('//input[@id="customer.lastName"]').type('S K')
        cy.xpath('//input[@name="customer.address.street"]').type('Janatha colony')
        cy.get('input[id="customer.address.city"]').type('chitradurga')
        cy.xpath('//input[@id="customer.address.state"]').type('Karnataka')
        cy.xpath('//td/input[@name="customer.address.zipCode"]').type('577521')
        cy.get('input[id="customer.phoneNumber"]').type('9980885955')
        cy.xpath('//td/input[@name="customer.ssn"]').type('1234')
        cy.get('td>input[id="customer.username"]').type('admin')
        cy.get('td>input[name="customer.password"]').type('admin')
        cy.get('td>input[id="repeatedPassword"]').type('admin')
        cy.get('input[value="Register"]').click()
        cy.contains('Your account was created successfully. You are now logged in.').should('be.visible')


    })
})