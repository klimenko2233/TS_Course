// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function create_ul(li:string):void {
    document.write(`
    <ul>
        <li>${li}</li>
        <li>${li}</li>
        <li>${li}</li>
    </ul>`);
}