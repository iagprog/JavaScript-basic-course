'use strict';

let buttons = document.querySelectorAll('button');
buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        if(button.innerText == "Подробнее"){
            button.innerText = "Отмена";
            button.parentNode.querySelector('.productPhoto').style.display = 'none';
            button.parentNode.querySelector('.desc').style.display = 'block';
        } else {
            button.innerText = "Подробнее";
            button.parentNode.querySelector('.productPhoto').style.display = 'block';
            button.parentNode.querySelector('.desc').style.display = 'none';
        }
    });
});
