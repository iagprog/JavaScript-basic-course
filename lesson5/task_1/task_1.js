'use strict';

let showModal = document.querySelector('.showButton');
let closeModal = document.querySelector('.closeButton');
let modal = document.querySelector('.modalWindow');

showModal.addEventListener('click', function(){
    modal.style.display = 'block';

});
closeModal.addEventListener('click', function(){
    modal.style.display="none";
});
