var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let emptyArray = [];
for(i = 0; i < mix.length; i++){
    
    emptyArray.push( typeof(mix[i]))
    
   
}
 console.log(emptyArray)