///<reference types="cypress"/>
describe("my first data",()=>{
    let information
    before(()=>{
    cy.fixture('example').then(function(data1){
        information=data1.rows[0];
        cy.log(information);
    })     
})
it("Data from fixtures",()=>{
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    //cy.get('input[type="text"]').type('Akshay').type('{enter}')
    cy.get('input[type="text"]').eq(0).type(information.name)
        cy.get('input[name="email"]').type(information.email) 
        cy.get('input[type="password"]').type(information.password)
        cy.get('#exampleFormControlSelect1').select(information.Gender) 
        cy.get('#inlineRadio1').click()
        cy.get('input[type="submit"]').click()
        cy.get('.alert').then(function(element){
            const usercreating=element.text()
            expect(usercreating.includes("Success!")).to.be.true
            
         })
        cy.contains('Shop').click()
        cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
        cy.contains(' Checkout ( 1 )').click()
        cy.contains('Checkout').click()
        cy.get('#country').type('india')
        cy.wait(5000)
        cy.get('.suggestions > ul > li > a').click({force:true})
        cy.get('.checkbox').click()
        cy.get('.ng-untouched > .btn').click()
        cy.get('.alert').then(function(element){
            let ordermsg=element.text()
            expect(ordermsg.includes("Success")).to.be.true

        })
    })

})