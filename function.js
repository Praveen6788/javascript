
// functions
function addnums(a=1,b=1){
    return (a+b)
}

// console.log(addnums(4,5))


let subs = (a,b) =>{
    return (a-b)}

// console.log(subs(4,5))



// object oriented programing
// constructor function 
function Person (fname,lname,dob){
    this.fname=fname
    this.lname=lname
    this.dob=new Date(dob)
    
    


}

Person.prototype.getyear = function () {
    return this.dob.getFullYear()

}

Person.prototype.fullname = function () {
    return  `${this.fname} ${this.lname}`
}

// const person1 = new Person("peter",'parker','1-1-1991')
// const person2 = new Person("the",'rock','1-1-1991')


// console.log(person1.getyear())
// console.log(person1.fullname())






// class

class Person1 {
    constructor(fname,lname,dob){
        this.fname=fname
        this.lname =lname
        this.dob = new Date(dob)
    }

    getyear (){
        return this.dob.getFullYear()

    }
    getfullname (){
        return  `${this.fname} ${this.lname}`
    }
}






const  p1 = new Person1("peter","paerker",'1-1-1989')


console.log(p1.getfullname())



// the classes and constructer function are same in backend but  the class the method are direcrly added to prototype

// A class is essentially syntactic sugar over constructor functions.