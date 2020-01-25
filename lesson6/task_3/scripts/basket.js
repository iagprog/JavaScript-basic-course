'use strict';

let basket = {
    rows: document.getElementById('addToBasket').rows, // кол-во рядов в таблице корзины
    basketOpened: false,

    showBasket() {
        document.querySelector('.hiddenBasket').style.display = 'block';
        this.basketOpened = true;
    },

    closeBasket() {
        document.querySelector('.hiddenBasket').style.display = 'none';
        this.basketOpened = false;
    },

    checkBasket(id) { // проверяет есть ли уже товар в корзине и увеличивает amount в случае повтора
        for (let i = 0; i < this.rows.length; i++) {
            if (id == this.rows[i].cells[0].innerText) {
                this.rows[i].cells[3].innerText++;
                return true;
            }
        }
        return false;
    },

    addProducts(id, name, price) {
        if (!this.checkBasket(id)) { //если в корзине нет этого товара
            let newProductRow = document.createElement('tr');
            newProductRow = `<tr><td>${id}</td><td>${name}</td><td>${price}</td><td>1</td><td><button class = "del">del</button></td></tr>`;

            let pos = document.getElementById('addToBasket');
            pos.insertAdjacentHTML("beforeend", newProductRow);
        }
        this.addTotalPrice();    // считаем сумму товаров в корзине     
    },

    removeProducts(row) {
        let tr = this.rows[row];  //получаем id ряда в таблице корзины
        let num = --tr.cells[3].innerText;                          //уменьшаем значение ячейки для Amount
        if (num == 0) {
            tr.parentNode.removeChild(tr);                          // товар полностью удален из корзины                       
        }
        this.addTotalPrice();
    },

    addTotalPrice() {                                            // считает Total Price в корзине
        let sum = 0;
        for (let i = 0; i < this.rows.length; i++) {
            sum += Number(this.rows[i].cells[2].innerText) * Number(this.rows[i].cells[3].innerText); // умножаем price * amount для каждого товара
        }
        let pos = document.getElementById('TotalPrice');
        pos.innerText = sum;
    }
};