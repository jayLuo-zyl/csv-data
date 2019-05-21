const csv = require("fast-csv");
 
// let arr1=[]; arr2=[];  // use array to store
let obj1={}; obj2={};   // use object to store
let res=[];

let toRun = async() => {
    // file 1: set1.csv
    let count = 0;
    await csv.fromPath("set1.csv").on("data", function(data){
        // arr1.push(data[0])
        obj1[data[0]] = count;
        count++;
    }).on("end", function(){
        console.log("Task 1 done");
    }); 

    // file 2: set2.csv
    count = 0;
    await csv.fromPath("set2.csv").on("data", function(data){
        // arr2.push(data[0]);
        obj2[data[0]] = count;
        count++;
    }).on("end", function(){
        console.log("Task 2 done");

        // Filter the difference
        for(let el in obj1){
            obj2[el] == null? res.push(el) : null;
        }
        console.log(res, res.length)
    }); 
}

toRun()



