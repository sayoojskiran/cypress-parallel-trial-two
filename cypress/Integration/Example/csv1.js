let csvToJson = require('convert-csv-to-json');
const { parse } = require('path');

csvToJson.generateJsonFileFromCsv('C:/Users/akshay.dm/Desktop/Demo of DDT/cypress/fixtures/csvdata.csv','C:/Users/akshay.dm/Desktop/Demo of DDT/cypress/fixtures/myOutputFile.json').fieldDelimiter(',')
//let jsonres=csvToJson.getJsonFromCsv('C:/Users/akshay.dm/Desktop/Demo of DDT/cypress/fixtures/csvdata.csv')
//let jsonres=csvToJson.getJsonFromCsv('C:/Users/akshay.dm/Desktop/Demo of DDT/cypress/fixtures/csvdata.csv')
// for(let i=0;i<jsonres.length;i++){
//     console.log(jsonres[i])
//     //console.log(jsonres[0].name)
// }
//let parsestring=csvToJson.fieldDelimiter(',').getJsonFromCsv('C:/Users/akshay.dm/Desktop/Demo of DDT/cypress/fixtures/csvdata.csv');
//console.log(parsestring)