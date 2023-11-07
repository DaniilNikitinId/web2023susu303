// "use strict";

// const { set } = require("core-js/core/dict");

// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let fioArray = fio.split(" ");
    return `${fioArray[1]} ${fioArray[0]}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    let mySet = new Set(array);
    return Array.from(mySet);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (array.length == 0) return false;
    
    let minSalary = Math.min.apply(null, array);
    let maxSalary = Math.max.apply(null, array);
    return maxSalary / minSalary
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.book = new Map();
    }

    addWord(word, description) {
        if (typeof word === 'string' && word != '' && typeof description === 'string' && description != '') {
            this.book.set(word, description);
        }
    }

    deleteWord(word) {
        if (typeof word === 'string' && this.book.has(word)) {
            this.book.delete(word);
        }
    }

    getDescription(word) {
        if (typeof word === 'string' && this.book.has(word)) {
            return this.book.get(word);
        } 
        else {
            return "Слово отсутствует в словаре";
        }
    }
}


module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};