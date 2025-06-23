// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
let str = 'Ревуть воли як ясла повні';
function stringToarray(str: string):string[]{
    return str.split(' ');
}
let str4 = 'Ревуть воли як ясла повні';
let arr1 = stringToarray(str4);