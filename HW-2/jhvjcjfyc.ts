// #Jg0gPO00
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
const input1 = document.querySelector<HTMLInputElement>('#input');
const result = document.querySelector<HTMLDivElement>('#result');
if(input1 && result) {
    input1.oninput = function ():void {
        result.innerText = (+input1.value * 2.2).toString();
    }
}


// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції – addToLocalStorage(arrayName:string,objToAdd:any{}):void
function addToLocalStorage<T extends object>(arrayName: string, objToAdd: T): void {
    const lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error(`Array "${arrayName}" does not exist in localStorage.`);
    }
    let array: T[];
    try {
        const parsed = JSON.parse(lsItem);
        if (!Array.isArray(parsed)) {
            throw new Error(`Item "${arrayName}" is not an array.`);
        }
        array = parsed as T[];
    } catch (e) {
        throw new Error(`Invalid JSON in localStorage under key "${arrayName}"`);
    }
    array.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage("sessions", {name:'vasya',age:365});


// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
const form2 = document.getElementById('tableGenerator') as HTMLFormElement;
const tableName = document.getElementById('table') as HTMLTableElement;

form2.onsubmit = function (event: SubmitEvent): void {
    event.preventDefault(); // Предотвращаем отправку формы
    tableName.innerHTML = ''; // Очищаем таблицу

    const rows = Number((form2.elements.namedItem('rows') as HTMLInputElement).value);
    const columns = Number((form2.elements.namedItem('columns') as HTMLInputElement).value);
    const filling = (form2.elements.namedItem('filling') as HTMLInputElement).value;

    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert('Введите корректные значения для строк и столбцов!');
        return;
    }

    for (let index = 0; index < rows; index++) {
        const tr: HTMLTableRowElement = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const td: HTMLTableCellElement = document.createElement('td');
            td.innerText = filling;
            tr.appendChild(td);
        }
        tableName.appendChild(tr); // Добавляем строку в таблицу, а не в форму
    }
}

