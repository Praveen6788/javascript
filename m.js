const input = document.querySelector("#input1")
const input2 =document.querySelector("#input2")
const btn = document.querySelector(".btn")
const ans =document.querySelector("#answer")

btn.addEventListener('click',()=>{
    a = input1.value
    b=input2.value
    // let h = document.createElement("h4")
    ans.textContent=Number(a)+Number(b)

    

    input1.value = " "
    input2.value=""

})