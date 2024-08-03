let inputs = document.getElementById("inp")
let list = document.querySelector(".todolist")
let check = document.querySelector(".checkbox")
let span = document.querySelector("#span1")
flag = 1
let newElem

function add(){
    if(inputs.value == ""){
        alert("please Enter a task")
    }else{
        let newElem = document.createElement("ul");
        newElem.innerHTML = `<span id="span1" onclick="ch()">${inputs.value}</span><i id="cross" class="fa-solid fa-xmark"></i>`
        list.appendChild(newElem);
        inputs.value=""
        newElem.querySelector("i").addEventListener("click" , ()=>{
            newElem.remove()
        })
        ch()
    }
}

function ch(){
    if(flag == 0){
        span1.style.textDecoration = "line-through"
        flag= 1
    }else{
        span1.style.textDecoration = "none"
        flag = 0
    }
}