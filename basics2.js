// if else 

const x = '20'
const y =10

if(x==10 && y==10){
    console.log('x is 10')
}
else if (x>10 || y <15){
    console.log("x is greater than 10")
}
else {
    console.log('not equal  ')
}

// ternary operator


const v = 9

const ad = v>=10 ? true : false

console.log(ad) 

// switche

switch (ad){
    case true:
        console.log('this is true')
        break
    case false:
        console.log('this is false')
        break
    default :
        console.log("this is default")

}