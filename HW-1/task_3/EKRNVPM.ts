// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(array:number[]):number {
    let result:number=0;
    for (const arrayElement of array) {
        result += arrayElement;
    }
    return result;
}