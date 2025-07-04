// – Є масив
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
type Course2  = {
  title: string;
  monthDuration: number;
}
let coursesAndDurationArray2:Course2[] = [
    {title: 'JavaScript Compleх', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray2) {
    let div:HTMLDivElement= document.createElement('div');
    div.innerText = `${course.title} - ${course.monthDuration} `;
    document.body.appendChild(div);
}