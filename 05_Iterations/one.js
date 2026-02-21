// for loop

for(let index = 1 ; index < 11; index++){
    console.log(index);
    
}

// console.log(index);


// for (let i = 0; i < 10; i++) {

    
//     for (let j = 0;j < 10;j++) {
//         console.log(i + '*' + j + '=' + i*j)
        
        
//     }   
// }


array = ["flash","batman", "superman", ]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
    
}

// break and continue
//no out of bounds error exist but it will print undefine dhwihc is not good

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        continue;
        
    }
    console.log("value of index is",index);

}



