// window is the parent class for browser

// // single element selectors
// console.log(document.getElementById("my-form"))
// console.log(document.querySelector(".container"))



// // multiple elelment selector

// let h =(document.querySelectorAll("h1"))  //returns nodes list
// console.log(document.getElementsByClassName("h1")) //return html coolection

// // console.log(document.getElementsByTagName("h1")) returns html collection

// h.forEach((a)=>{
//     console.log(a)
// })




// const ul =document.querySelector('.items')

// ul.firstElementChild.textContent="hello"
// // ul.firstElementChild.remove()

// ul.children[1].innerHTML ="gdgr"

// ul.lastElementChild.innerHTML= '<h5>hello</h5>'


// const btn =document.querySelector(".btn")
// btn.style.background='red'

// btn.addEventListener('click',(e)=>{

//     e.preventDefault()
//     document.querySelector('#my-form').style.background="#ccc"

//     document.querySelector('.items').lastElementChild.innerHTML="<h1>hello guru</h1>"
    
    

// })



const myform =document.querySelector('#my-form')
const nameinput =document.querySelector('#name')
const emailinput =document.querySelector('#email')
const msg =document.querySelector('.msg')
const userlist =document.querySelector('#users')




myform.addEventListener('submit',onsubmit=(e) =>{
    e.preventDefault()
    if(nameinput.value === ''|| emailinput.value === ''){
        msg.classList.add("error")
        msg.innerHTML="please enter the values"
        setTimeout(() => {
            msg.remove()
            
        }, 3000);
        
    }
    else{
        console.log("sucess")
        const li =document.createElement("li")
        li.appendChild(document.createTextNode(`${nameinput.value} : ${emailinput.value}`))

        userlist.appendChild(li)

        nameinput.value=''
        emailinput.value=''
    }

})