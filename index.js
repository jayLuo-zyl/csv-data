const csv = require("fast-csv");
 
let arr1=[]; arr2=[];
let res=[];
let display = (arr)=>{
    console.log(arr[0], arr[1]);
}

let toRun = async() => {
    // file 1: set1.csv
    await csv.fromPath("set1.csv").on("data", function(data){
        arr1.push(data[0])
    }).on("end", function(){
        console.log("done");
        // display(arr1);
        console.log(`Length of set1 : ${arr1.length-1}`)
        // console.log(arr1)
    }); 

    // file 2: set2.csv
    await csv.fromPath("set2.csv").on("data", function(data){
        arr2.push(data[0])
    }).on("end", function(){
        console.log("done");
        // display(arr2);
        console.log(`Length of set2 : ${arr2.length-1}`)

        // Filter the difference
        let i = 1;
        while (i<=arr1.length-1){
            // console.log(arr1[i], arr2[i]);
            arr2.includes(arr1[i]) ? null : res.push(arr1[i]);
            i++;
        }
        console.log(res, res.length)
    }); 
    

}

toRun()



