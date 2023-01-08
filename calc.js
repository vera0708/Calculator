"use strict";

const calculatingResult = calculate('VI * V');

console.log(calculatingResult);

function calculate(string) {
    let romans = Array(10)
    romans[0] = "I"
    romans[1] = "II"
    romans[2] = "III"
    romans[3] = "IV"
    romans[4] = "V"
    romans[5] = "VI"
    romans[6] = "VII"
    romans[7] = "VIII"
    romans[8] = "IX"
    romans[9] = "X"

    let operators = ["+", "-", "*", "/"]
    let operator = ''
    let values = []


    // находим какая арифметическая операция из 4-х возможных используется в данном тесте
    for (let i = 0; i < operators.length; i++) {
        let logic = operators[i];
        values = string.split(logic);
        if (values.length === 2) {
            operator = logic;
            break;
        }
    }

    values[0] = values[0].trim()
    values[1] = values[1].trim()

    // если строка не является ни одной из 4-х арифметических операций
    if (operator === '' || (values[0].length <= 0 && values[1].length <= 0))
        throw new Error('Это не арифметическа операция');

    //проверяем на принадлежность к целым числам
    let firstValue = parseInt(values[0], 10)
    let secondValue = parseInt(values[1], 10)

    //проверяем если числа разного типа (арабское и римское)
    let sameType = (Number.isInteger(firstValue) && Number.isInteger(secondValue)) || (isNaN(firstValue) && isNaN(secondValue))
    if (!sameType) throw new Error('Оба числа должны быть одного типа: арабские или римские')

    let isRomanNumber1 = false
    let isRomanNumber2 = false

    // переводим первое римское число в арабское 
    if (isNaN(firstValue)) {
        for (let i = 0; i < romans.length; i++) {
            let isRoman = romans[i];
            if (isRoman === values[0]) {
                firstValue = (i + 1);
                isRomanNumber1 = true
                break;
            }
        }
    }

    // переводим второе римское число в арабское 
    if (isNaN(secondValue)) {
        for (let i = 0; i < romans.length; i++) {
            let isRoman = romans[i];
            if (isRoman === values[1]) {
                secondValue = (i + 1);
                isRomanNumber2 = true
                break;
            }
        }
    }

    if (isNaN(firstValue) && isRomanNumber1 === false
        || isNaN(secondValue) && isRomanNumber2 === false) {
        throw new Error('Числа должны быть в диапазоне от I до X включительно')
    }

    let result;

    //проводим одну из 4-х возможных арифметических операций
    if (firstValue < 1 || firstValue > 10 || secondValue < 1 || secondValue > 10) {
        throw new Error('Числа должны быть в диапазоне от 1 до 10 включительно')
    }

    if (operator === '+') {
        result = firstValue + secondValue
    } else if (operator === '-') {
        //проверяем что разность римских чисел больше нуля
        if (isRomanNumber1 == true && (firstValue - secondValue) <= 0) {
            return ''
        } else
            result = firstValue - secondValue
    } else if (operator === '*') {
        result = firstValue * secondValue
    } else if (operator === '/') {
        result = Math.trunc(firstValue / secondValue)
    }

    if (isRomanNumber1 === false) {
        return String(result);
    } else {
        let romanResult = romanize(result);

        return romanResult;
    }
}

function romanize(num) {
    //для римских чисел переводим результат вычисления в римскую форму
    let roman;

    let digits = String(+num).split(""); // ["9", "7"]
    let key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
        "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]

    roman = ""

    for (let i = 2; i >= 0; i--) {
        roman = (key[+digits.pop() + (i * 10)] || "") + roman
    }

    return Array(+digits.join("") + 1).join("M") + roman
}
