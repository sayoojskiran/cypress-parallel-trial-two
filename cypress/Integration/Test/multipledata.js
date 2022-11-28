let rowsLength;
///<reference types="cypress"/>
describe("My first multipledata",()=>{
    var i=0;
    for(i=0;i<3;i++)
    it.only("driving multiple sets" +i,()=>{

       // cy.visit(Cypress.env('url'))//url declared globally
       cy.visit('/')
        cy.fixture('example').then((data)=>{
           data.rows.forEach(element => {
                //cy.wait(3000)
                cy.get('input[type="text"]').eq(0).clear().type(element.name,{delay:1000})
                cy.get('input[name="email"]').clear().type(element.email) 
                cy.get('input[type="password"]').clear().type(element.password)
                cy.get('#exampleFormControlSelect1').select(element.Gender) 
                cy.get('#inlineRadio1').click()
                cy.get(':nth-child(8) > .form-control').type(element.DOB);
                cy.get('input[type="submit"]').click()
                cy.get('.alert').then(function(element){
                const usercreated=element.text()
                expect(usercreated.includes("Success!")).to.be.true
                
            });

            })

        })

    })
    
})

      