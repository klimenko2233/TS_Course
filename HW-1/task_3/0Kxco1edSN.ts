// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function create_Ul(li:string, index:number):void {
    document.write(`<ul>`)
    for (let i = 0; i < index; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`)
}