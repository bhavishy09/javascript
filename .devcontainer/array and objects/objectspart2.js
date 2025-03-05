// how objects singleton or using constructor




//-->both same declare krne k tarike
// const tinderUser = new Object() -->using singleton 
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);



//objects m jitne cahe utni nesting  m ja skte h 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "bhsvishya ",
            lastname: "s"
        }
    }
}


//acess by using dot(.)
// console.log(regularUser.fullname.userfullname.firstname


//merging of objects 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


//-->tarika 1
// const obj3 = { obj1, obj2 }

//traika 2
// const obj3 = Object.assign({}, obj1, obj2, obj4)


//spread bala tarika
//const obj3 = {...obj1, ...obj2}
// console.log(obj3);




//jab data base se values ayegi to array of objects k form m ayegi 
//array of objects 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
