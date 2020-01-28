'use strict';

//покупка товара по нажатию одной из кнопок "buy"
let buy = document.querySelectorAll('.buyButton');
buy.forEach(function(event, id){
    event.addEventListener('click',function(event){
            // получаем данные о продукте в виде массива его "детей"
            let productData = event.target.parentElement.children;
            //alert("Добавление в корзину продукта с id: " + (id+1) + "name: " + productData[0].innerText + " price: " + productData[2].innerText);
            // добавляем продукт в корзину
            basket.addProducts(id+1,productData[0].innerText, productData[2].innerText);
    });
});

document.body.addEventListener('click', function(event, id) {
    switch(event.target.className){
        case "basketButton":  
            if(!basket.basketOpened){
                basket.showBasket();
            }
            else {
                basket.closeBasket();
            } 
            break;
        case "del":
            if(basket.basketOpened){
                let row = event.target.parentElement.parentElement.rowIndex; // row нажатой кнопки "del"
                basket.removeProducts(row);
            }
            break;
    } 
  });







