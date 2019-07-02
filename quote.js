const csv = require("fast-csv");
const writeFile = require('write');

(async() => {
    let count = 0;
    let newTxt = ''
    const stream = await csv.fromPath("prod_1.csv").on("data", function(data){
        newTxt = newTxt+ "'" + data[0].trim() + "',\n"
        // console.log(newTxt)
        count++;
    }).on("end", function(){
        // Remove the comma and new line character for the last one
        writeFile.sync('foo.txt', newTxt.slice(0, -2)); 
        console.log(`Task completed with ${count} records processed.` );
    }); 
})()