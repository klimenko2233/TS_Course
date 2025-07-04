// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
const button = document.querySelector<HTMLButtonElement>('#btn');
const div1 = document.querySelector<HTMLDivElement>('#text');

if (button && div1) {
    button.addEventListener('click', () => {
        div1.remove();
    });
}

// #j693ca8
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
const form = document.querySelector<HTMLFormElement>('#ageForm');
const ageInput = document.querySelector<HTMLInputElement>('#age');
const message = document.querySelector<HTMLParagraphElement>('#message');
if (form && ageInput && message) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const age = parseInt(ageInput.value);
        if (isNaN(age)) {
            message.innerText = 'Будь ласка, введіть коректний вік.';
        } else if (age >= 18) {
            message.innerText = 'Вік підтверджено.';
        } else {
            message.innerText = 'Вам ще не виповнилося 18 років.';
        }
    });
}

// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
const form1 = document.forms.namedItem("Form") as HTMLFormElement;
const target = document.getElementById("target") as HTMLDivElement;
form1.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = form1.elements.namedItem("name") as HTMLInputElement;
    const surnameInput = form1.elements.namedItem("surname") as HTMLInputElement;
    const ageInput = form1.elements.namedItem("age") as HTMLInputElement;
    const user = {
        name: nameInput.value,
        surname: surnameInput.value,
        age: ageInput.valueAsNumber,
    };
    console.log(user);
    target.innerText = `${user.name} ${user.surname}, ${user.age} років`;
});

// #2VaLt4vDczH
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const storedValue = localStorage.getItem('number');
let currentNumber: number = storedValue ? parseInt(storedValue, 10) : 0;
currentNumber++;
localStorage.setItem('number', currentNumber.toString());
const divIncr = document.querySelector<HTMLDivElement>('#incrementation');
if (divIncr) {
    divIncr.innerText = currentNumber.toString();
}


