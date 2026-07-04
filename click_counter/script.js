const incBtn = document.getElementsByClassName('inc')[0];
const decBtn = document.getElementsByClassName('dec')[0];

const count = document.getElementsByClassName('count')[0];
let value = 0;
incBtn.addEventListener("click",()=> {
    value++;
    count.textContent = value;
})

decBtn.addEventListener("click", ()=>{
    value--;
    count.textContent = value;
})