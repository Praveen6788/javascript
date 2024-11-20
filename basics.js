// var global scoped can be redeclared,re assigned
//let block scoped , cant   be redeclare ,can re asigned
// const cant be decalred cant be re assigned


 

// data types 
// primitive - string ,number,boolean,null,undefined

// const name = 'john'
// const age =90
// const iscool =true
// const rating =4.5
// const x = null  //the null return object type because it gets 0 type means bogus types
// let q

// console.log(typeof(name))
// console.log(typeof(age))
// console.log(typeof(iscool))
// console.log(typeof(rating))
// console.log(typeof(x))
// console.log(typeof(q))


// non primitive data types 
// strings
const name = 'john'
const age = 30

// console.log(`my name is ${name} and age is ${age}`)



// const s = 'hello world'

// console.log(s[3])
// console.log(s.substring(0,5))
// console.log(s.toUpperCase() )
// console.log(s.length)
// console.log(s.split(""))
// console.log(s.toLowerCase())


// Arrays - variables that holds multiple values

const b = [3,4,'sdsd','erwer']
const praveen = [1,"praveen","what",true,]
console.log(praveen)
console.log(praveen[1])
praveen.push("hello")
praveen.pop()
praveen.unshift("enjoy") // add elements at first
praveen.shift() // reove elements from first 

console.log(praveen.indexOf("what"))
let  g =praveen.concat(b) //used to comnine two arrays
console.log("g "+g)


// slice is used for slicing
// spliice syntax =splice(start,delectcount,itemtobeadded1,itemtobeadded2)
console.log(praveen.slice(1,4))
praveen.splice(1,1,"vo","we")
console.log(praveen)



// object consists multiplr datatypes but stored in key value paies


const person = {
    firstname :'peter',
    lastname : "parker",
    age : 30,
    hobbies:['dance','laugh'],
    adress : {
        street : "ram namger",
        city:"hyderbad",
        state:"telangana"

    }

}

console.log(person)
console.log(praveen.hobbies)
console.log(person.adress.city)



const  {firstname,lastname} =person // can destructre the values in object
console.log(firstname,lastname)

 
person.email="abc@gmail.com"

console.log(person.email)