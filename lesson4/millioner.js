
'use strict';

let game = {
    correctAnswers : 0, //кол-во правильных ответов
    init() {
        console.log("Cможете ли вы выиграть в игре <<Кто хочет стать миллионером?>>");
        console.log("Для выхода из игры нажмите <<cancel>>");
        game.start();   // вызываем метод start объекта game
        game.finish();  
        
    },

    start() {
        for(let i = 0; i < gameTest.numQuestions; i++) { // проходим по объекту с вопросами-ответами "gameTest"
            console.log('Вопрос №' + `${i+1}` + '\n' + gameTest.showQuestion(i) + '\n');
            console.log('Варианты ответов:' + '\n');
            for(let j = 0; j < gameTest.showVariants(i).length; j++) {
                console.log(`${j+1}` + '.' + gameTest.variants[i][j] + '\n');
            }        
            let a = game.getAnswer();   //получаем ответ пользователя
            if(a != null){
                if(gameTest.trueAnswer(a, i)){
                    console.log('Верно!' + '\n');
                    game.correctAnswers++;
                }
                else {
                    console.log('Вы ошиблись.' + '\n');
                }
            }
            else{  // игра продолжается, пока не нажмут кнопку отмена
                return;
            }    
        }

    },

    finish(){
        console.log('Игра закончена, верных ответов: ' + this.correctAnswers);
        if(game.correctAnswers == gameTest.numQuestions){
            console.log("Это победа, вы миллионер!");
        }
    },

    getAnswer(){
        while(true){
            let answer = prompt('Выберите из консоли нужный вариант ответа (целое число): ');
            if(answer in gameTest.answers || answer == null){   //есть ли такой вариант ответа, либо пользователь нажал          
                return answer;                                  //"cancel"
            }
            else{
                console.log("Для ответа введите целое число от 1 до 4");
                console.log("Для выхода из игры нажмите 'отмена'");
            }

        }
    }
};

let gameTest = {
    numQuestions : 5,
    questions: ["Какие бывают лопаты?", "Из чего плели лапти-волосяники?", "Какой клетки нет на шахматной доске?",
    "Сколько букв в слове ёлка?", "Какого цвета бывает солнце?"],
    variants : [["совковые", "тяпковые", "мотыжные", "граблевые"],
                ["из травы", "из льна", "из конского волоса"],
                ["h8", "k6", "b7", "g5"],
                [1, 2, 3, 4],
                ["зеленое", "синее", "жёлтое"]
    ],
    answers: [1,3,2,4,3], //номера верных ответов
    showQuestion(i) {
        return this.questions[i]; // метод возвращает нужный вопрос
    },
    showVariants(i) { // метод показывает варианты ответов по заданному вопросу
        return this.variants[i];
    },
    trueAnswer(answer, i){ //метод проверяет имеется ли тестах такой ответ на вопрос
        return (answer == this.answers[i]);
    }

};

game.init(); //старт программы
