let myArray = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let hello = [];
for(let index = 0; index < myArray.length; index++){
    let element = myArray[index];
    // MAGIC HAPPENS HERE
    if(element.includes(obj)){
       return  hello.push(element)
    }else{
        
        return element
    }
}

console.log(hello)