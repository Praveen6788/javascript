// destructring in objects and arrays

// destructuring elements from array

let a =[name="praveen",[occupatio="frontend developer","backend developer"],122,3434,131312]

let [c,b,...rest] = a   //rest keyword is along with spread operator to copy the rest of the elements

let [h,[k,j],u]=a  //nested array destructring 

// console.log(b)

// console.log(k,j)





// DESTRUCTRING ELEMENTS FROM OBJECT


const x = {
    nam:"praveen",
    age:20,
    education : "B-tech",
    address : {
        city:"hyderabad",
        state:"telangana"
    },
    k:null
    
};

const {nam,...rest2} =x

console.log(nam)
console.log(rest2)

console.log(JSON.stringify(x))  // to convert the object into json 


console.log(x.k?.h1) //optional chaining gives output undefined if it is null or 






//  Destructuring Function Parameters

const z =({name,age})=>{
    console.log(name,age)

} 


const mj = {name:"alice",age:19}
z(mj)