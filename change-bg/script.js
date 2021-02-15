// function changeBgToRed(element){
//     element.style.backgroundColor = "red"
// }

// function changeBgToPink(element){
//     element.style.backgroundColor = "pink"
// }

// function changeBgToGrey(){
//     document.style.backgroundColor = "rgb(26, 25, 25)"
// }

const btnBlue = document.querySelector('#blue')
const btnPink = document.querySelector('#pink')
const body = document.querySelector('body')
const btnReset = document.querySelector('#back')
// btnRed.addEventListener('click', changeBgToRed(body))
// btnReset.addEventListener('click', changeBgToGrey)

btnBlue.addEventListener('click', function(){
    body.style.backgroundColor = "lightblue"
})

btnPink.addEventListener('click', function(){
    body.style.backgroundColor = "pink"
})

btnReset.addEventListener('click', function(){
    body.style.backgroundColor = "rgb(26, 25, 25)"
})