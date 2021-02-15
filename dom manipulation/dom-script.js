const body = document.body
body.append('hello')
const div =  document.createElement('div')
div.innerHTML = "<b>this is</b>"
//puting the bold tag inside innerHTML is not recommended
//it will create a security issue in your website
body.append(div)

//better and more secure way to manipulate innerHTML
const div2 = document.createElement('div')
const strong = document.createElement('strong')
strong.innerHTML = ' this is more secure way to bolden in html'
div.append(strong)

//removing element using id
 const delelm = document.getElementById('first')
 delelm.remove()

//getAttributes
// const bucket = document.getElementById('bucket-id')
// console.log(bucket.getAttribute('name'))

//setAttributes
//  const bucket = document.getElementById('bucket-id')
// console.log(bucket.setAttribute('name', "newName"))

//removing atribut of an element inside HTML file
//  const bucket = document.getElementById('bucket')
//  bucket.removeAttribute('name')