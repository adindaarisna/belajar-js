//DOM Manipulation
const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");
// text.classList.add('change');
// console.log(text);
// console.log(changeColor);

changeColor.addEventListener('click', function () {
    text.classList.add("change");
})

//list turn red after being clicked
const nameList = document.querySelectorAll(".name-list li");
for (namel of nameList){
    namel.addEventListener('click', function(){
        this.style.color="red";
    });
}

//add new input to the list
const addListBtn = document.querySelector(".add-list");
const listInput = document.querySelector(".list-input");
const userList = document.querySelector(".name-list");
addListBtn.addEventListener('click', function(){
    const newLine = document.createElement('LI');
    const contentLi = document.createTextNode(listInput.value);
    newLine.appendChild(contentLi);
    userList.appendChild(newLine);
});