let rowsLength;
describe ('Data Driven Testing Using Excel FIle', () =>{
  before(() => {
     cy.task('readXlsx', { file: 'cypress/fixtures/exceldata.xlsx', sheet: "sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
      })
    })
        
    it ('Data Driven: Register User', () => {
      cy.log(rowsLength)
      cy.visit("https://rahulshettyacademy.com/angularpractice/")
      cy.fixture('xlsxData').then((data) => {
        data.rows.forEach(element => {
               //cy.log(element.name)
               //cy.wait(3000)
               cy.get('input[type="text"]').eq(0).clear().type(element.name)
               cy.get('input[name="email"]').clear().type(element.email) 
               cy.get('input[type="password"]').clear().type(element.password)
               cy.get('#exampleFormControlSelect1').select(element.gender) 
               cy.get('#inlineRadio1').click()
               cy.get(':nth-child(8) > .form-control').type(element.Dob);
               cy.get('input[type="submit"]').click()
               cy.get('.alert').then(function(element){
               const usercreated=element.text()
                expect(usercreated.includes("Success!")).to.be.true 
                })
              })
                
              })
            })
          })
        