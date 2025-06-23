// – Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру за шаблоном
// Масив: let listOfItems = [‘html’, ‘css’, ‘javascript’, ‘mysql’, ‘mongodb’, ‘react’, ‘angular’, ‘node.js’];

let listOfItems: string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (let listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
}
document.write(`</ul>`)