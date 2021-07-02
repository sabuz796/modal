let openButton = document.querySelector('#open')
let closeButton = document.querySelector('#close')
let modalContainer = document.querySelector('#modal-container')

openButton.addEventListener('click', ()=>{
    modalContainer.classList.add('show');

})
closeButton.addEventListener('click', ()=>{
    modalContainer.classList.remove('show');
})