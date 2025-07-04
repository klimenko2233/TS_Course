// – Є масив (той же, coursesAndDurationArray)
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
// Завдання робити через цикли.
let coursesAndDurationArray3:Course2[] = [
    {title: 'JavaScript Compleх', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray3) {
    let div:HTMLDivElement= document.createElement('div');
    div.className = "item";
    let h2:HTMLHeadingElement = document.createElement("h2");
    h2.className = "heading";
    h2.textContent = course.title;
    let p:HTMLParagraphElement = document.createElement("p");
    p.className = "description";
    p.innerText = course.monthDuration.toString();
    div.append(h2,p);
    document.body.appendChild(div);
}