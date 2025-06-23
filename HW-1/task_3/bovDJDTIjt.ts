// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
type User1 ={id:number,name:string,age:number};
function objects_writer(array:User1[]):void {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>
        ${array[i].id}.${array[i].name} - ${array[i].age} years old
        </div<br>`)
    }
}