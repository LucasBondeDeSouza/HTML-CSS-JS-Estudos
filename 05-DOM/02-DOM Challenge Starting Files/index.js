const button = document.querySelector('button')
const elemento = document.querySelector('ul').lastElementChild

button.onclick = () => {
    elemento.innerHTML = 'Angela'
}