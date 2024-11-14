const display = document.getElementById('input');
const clearButton = document.getElementById('clear');
const eraseButton = document.getElementById('erase');
const equalButton = document.getElementById('equal');
const buttons = document.querySelectorAll('.input-button');

// Обработчик для кнопок (цифры и операторы)
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        
        // Если это не кнопки "=" "AC" или "DEL", добавляем значение на дисплей
        if (value !== "=" && value !== "AC" && value !== "DEL") {
            display.value += value;
        }
    });
});

// Очистка дисплея (AC)
clearButton.addEventListener('click', () => {
    display.value = '';
});

// Удаление последнего символа (DEL)
eraseButton.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});

// Вычисление результата при нажатии "="
equalButton.addEventListener('click', () => {
    try {
        // Проверяем и вычисляем выражение
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Ошибка'; // Если произошла ошибка в вычислениях
    }
});

// let equalPressed = 0;
// let buttonInput = document.querySelectorAll(".input-button");

// let input = document.getElementById('input');
// let equal = document.getElementById('equal');
// let clear = document.getElementById('clear');
// let erase = document.getElementById('erase');

// window.onload = () => {
//     input.value = "";
// }

// buttonInput.forEach((button_class) => {
//     button_class.addEventListener("click", () => {
//         if(equalPressed === 1){
//             input.value = "";
//             equalPressed = 0;
//         }
//         input.value += button_class.value;
//     })
// })

// equal.addEventListener('click', () => {
//     equalPressed = 1;  // Устанавливаем флаг, чтобы не вводить числа дальше
//     let inp_val = input.value.trim();  // Убираем пробелы по краям

//     // Проверяем, если выражение пустое или некорректное
//     if (!inp_val || /[^0-9+\-*/.()]/.test(inp_val)) {
//         input.value = "Ошибка";  // Выводим сообщение об ошибке
//         return;
//     }

//     try {
//         let solution = eval(inp_val);  // Вычисляем выражение
        
//         // Если результат целое число, просто выводим его
//         if (Number.isInteger(solution)) {
//             input.value = solution;
//         } else {
//             input.value = solution.toFixed(2); // Округляем до 2 знаков
//         }
//     } catch (err) {
//         input.value = "Ошибка"; // Если ошибка в вычислениях, выводим "Ошибка"
//     }
// });

// // equal.addEventListener('click', () => {
// //     equalPressed = 1;
// //     let inp_val = input.value;
// //     try{
// //         let solution = eval(inp_val);

// //         if(Number.isInteger(solution)){
// //             input.value = solution;
// //         }
// //         else{
// //             input.value = solution.toFixed(2);
// //         }
// //     }catch (err){}
// // });

// clear.addEventListener('click', () => {
//     input.value = "";  // Очищаем поле ввода
//     equalPressed = 0;   // Сбрасываем флаг
// });

// // Обработчик для кнопки "DEL" (удалить последний символ)
// erase.addEventListener('click', () => {
//     input.value = input.value.slice(0, -1); // Удаляем последний символ
// });