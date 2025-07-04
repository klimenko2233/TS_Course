// – Є масив:
// [‘Main’,’Products’,’About us’,’Contacts’]
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arrr:string[] = ['Main','Products','About us','Contacts'];
const ul:HTMLUListElement = document.createElement("ul");
for (const item of arrr) {
    const li:HTMLLIElement = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
}
document.body.appendChild(ul);