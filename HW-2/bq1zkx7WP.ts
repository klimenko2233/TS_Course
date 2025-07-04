// #bq1zkx7WP
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається
const div2 = document.querySelector<HTMLDivElement>('#price');
const storedPrice = localStorage.getItem('price');
const storedUpdate = localStorage.getItem('updateTime');
let price: number = storedPrice ? parseInt(storedPrice, 10) : 0;
let lastUpdate: number = storedUpdate ? parseInt(storedUpdate, 10) : 0;
const now: number = Date.now();
if (div2) {
    if (!storedPrice) {
        price = 100;
        localStorage.setItem('price', price.toString());
        localStorage.setItem('updateTime', now.toString());
    } else if (now - lastUpdate >= 10000) {
        price += 10;
        localStorage.setItem('price', price.toString());
        localStorage.setItem('updateTime', now.toString());
    }
    div2.innerText = `${price} грн`;
}

// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

type User3 = {
    id: number;
    name: string;
    email: string;
}
const users2:User3[] = [];
for (let i = 1; i <= 100; i++) {
    users2.push({
        id: i,
        name: `User ${i}`,
        email: `user${i}@gmail.com`
    });
}
let page:number = 0;
let pageSize:number = 10;
const items = document.querySelector<HTMLDivElement>('#item');
const prev = document.querySelector<HTMLButtonElement>('#prev');
const next = document.querySelector<HTMLButtonElement>('#next');

function pagination():void {
    if (!items) return
    const start:number = page * pageSize;
    const end:number = start + pageSize;
    const currentItems:User3[] = users2.slice(start, end);
    items.innerHTML = '';
    currentItems.forEach(user => {
        const div:HTMLDivElement = document.createElement('div');
        div.innerText = `${user.id}. ${user.name} — ${user.email}`;
        items.appendChild(div);
    });
}
pagination();
prev?.addEventListener('click', (event:MouseEvent):void => {
    if(page > 0) page--;
    pagination();
});
next?.addEventListener('click', (event:MouseEvent):void => {
    if((page+1) * pageSize < users2.length) page++;
    pagination();
});