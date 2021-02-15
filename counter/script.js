// initial count
let count= 0

// select value and buttons
const value = document.querySelector('#value')
const buttons = document.querySelectorAll('button')

console.log(buttons)
buttons.forEach(function(but){
    but.addEventListener('click', function(e){
        console.log(e.currentTarget.classList)
        const clicked = e.currentTarget.classList
        if (clicked.contains("decrease")){
            count--
        }
        else if (clicked.contains("increase")){
            count++
        }
        else if (clicked.contains("reset")){
            count=0
        }

        if(count<0){
            value.style.color = "red"
        }
        else if(count>0){
            value.style.color = "green"
        }
        else if(count==0){
             value.style.color = "black"
        }
        value.textContent = count;
    })
})

console.log("hey there")