///<reference types="cypress"/>
let csvToJson = require('convert-csv-to-json');
describe("my first csv retreiving",()=>{
    it("csv data",()=>{
        csvToJson.generateJsonFileFromCsv('C:/Users/akshay.dm/Desktop/Demo of DDT/cypress/fixtures/csvdata.csv','C:/Users/akshay.dm/Desktop/Demo of DDT/cypress/fixtures/myOutputFile.json')
        let jsonres=csvToJson.getJsonFromCsv('C:/Users/akshay.dm/Desktop/Demo of DDT/cypress/fixtures/csvdata.csv')
        for(let i=0;i<jsonres.length;i++){
            cy.log(jsonres[i])
        
        }
        

    })
})


