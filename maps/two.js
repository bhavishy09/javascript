//how objects ko iteratate kre --> objects p kese loop lagye 
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//myObject[key]
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]


// FOR IN  give keys not value
for (const key in programming) {
    //console.log(programming[key]);
}



//GIVE ERROR MAP ARE NOT ITERATABLE 
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }