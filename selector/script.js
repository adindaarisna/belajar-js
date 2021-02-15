const gparent = document.getElementById('grandparent-id')
gparent.style.backgroundColor = "blue";

function changeColor(element){
    element.style.backgroundColor = "yellow"
}
changeColor(gparent)

//the output of getElement is collection
//collection doesnt have forEach function
//so change the collection into array using Array.from()

const parent = Array.from(document.getElementsByClassName('parent'))
parent.forEach(changeColor)

// const child = document.querySelector('.child')
// child.style.backgroundColor="green"
//querySelector only modifies the first element it finds
//in this case, only the first child

const allChild = document.querySelectorAll('.child')
allChild.forEach(changeColor)
//when using uerySelectorAll,
//we dont need to convert the output into array

const nenek = document.querySelector('.nenek')
const allNenek = document.querySelectorAll('.nenek')
const firstAnak = nenek.querySelector('.anak')
const allAnak = nenek.querySelectorAll('.anak')
//anak ada di bawah 2 tingkat dari nenek
//bisa dipilih langsung dengan querySelector
allAnak.forEach(changeColor)

//select from buttom to the top
//from child to parent to grandparent
function changeColorToPink(element){
    element.style.backgroundColor = "pink"
}

function changeColorToGrey(element){
    element.style.backgroundColor = "grey"
}

const upOrtu = firstAnak.parentElement
changeColorToPink(upOrtu)

