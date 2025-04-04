/*maps-->The Map object holds key-value pairs and remembers
 the original insertion order of the keys. 
Any value (both objects and primitive values) 
may be used as either a key or a value.*/ //unique values



const map = new Map()
//map-->(key,value)
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }



// this give you can't destructure object like maps in keys and value 
//  for (const [key, value] of myObject) {
//      console.log(key, ':-', value);
    
//  }