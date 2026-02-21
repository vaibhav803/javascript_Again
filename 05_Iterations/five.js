const coding = ["js","go","cpp","ts","py"]

// coding.forEach(function (val) {
//     console.log(val);
    
// })


// coding.forEach((val) => {
//     console.log(val);
    
// })


// function printMe(item){
//     console.log(item);
    
// }


// coding.forEach(printMe) // can pass predefined function


// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
    
// }   )



const mycoding = [
    {
        lang : "ts",
        lf: ".ts"
    },
    {
        lang: "go",
        lf: ".go"
    },
    {
        lang: "cpp",
        lf: ".cpp"
    }
]

//every db call is array with object in it


// mycoding.forEach((item)=> {
//     const {lang,lf} = item
//     console.log(item.lang);
    
// })


const values = coding.forEach((item) => {
    // console.log(item);  // Does not return values
    return item
    
})


console.log(values);
