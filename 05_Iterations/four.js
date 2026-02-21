const myObject = {
    js: 'javascript',
    go: 'golang',
    ts: 'typescript',
    cpp: 'cplusplus'
}

for (const key in myObject) {
    console.log(myObject[key]);
    
}


// for (const key in map){
//     console.log(key);
    
// } //does not work as map is not iterable