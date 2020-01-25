'use strict';

let renderer = {
    renderBoard(){
        let resBoard = this.generateBoard();
        document.body.innerHTML = resBoard; 
        this.insertRow();
        this.insertCol();
    },

    generateBoard(){
        let board ='';
        let el = 0;
        for(let y = 0; y < config.rows.length; y++){
            board += '<tr>';
            for(let x = 0; x < config.cols.length; x++){
                if(( x + y ) % 2 != 0){
                    board += `<td class="blackSquare" data-x="${x}" data-y="${y}"></td>`;
                } else {
                    board += `<td data-x="${x}" data-y="${y}"></td>`;
                }
            }
            board += '</tr>';
        }
        return `<table><tbody>${board}</tbody></table>`;
    },

    insertRow(){
        let rows = document.querySelectorAll('tr');
        for(let i = 0; i < rows.length; i++){
            let td = document.createElement('td');
            td.innerText = config.rows[i];
            rows[i].insertAdjacentHTML("afterbegin", td.innerText);
            
        }
    },

    insertCol(){
        let cols = document.querySelector('tr');
        let tr = '';
        tr += `<td class = "title"></td>`
        for(let i = 0; i < config.cols.length; i++){
            tr += `<td class = "title">${config.cols[i]}</td>`;
            console.log(tr);
            
        }
        cols.insertAdjacentHTML("beforebegin", tr);
    }
};


renderer.renderBoard();




