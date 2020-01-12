'use strict';

/**
 * Функция с тремя параметрами, выполняет арифметическую операции
 * @param {number} arg1 значение первого аргумента
 * @param {number} arg2 значение второго аргумента
 * @param {string} operation строка с названием операции (+,-,/,*)
 * @returns {number} результат арфиметической операции
 * @throws {Error} выдает ошибку в console, если введена неподдерживаемая операция
 */
function mathOperation(arg1, arg2, operation){
    let result = 0;
    switch(operation){
        case "+":
            result = Sum(arg1,arg2);
            break;
        case "-":
            result = Subtraction(arg1, arg2);
            break;
        case "*":
            result = Multiplication(arg1, arg2);
            break;
        case "/":
            result = Division(arg1, arg2);
        default:
            throw new Error("Введите одну из операций: +,-,/,*");
    }
    return result;
}
