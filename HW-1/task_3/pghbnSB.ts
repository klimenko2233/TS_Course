// – створити функцію яка повертає найменьше число з масиву
function min_num(array:number[]):number {
    let result=array[0];
    for (let i=1 ;i<array.length;i++) {
        if (array[i]<result) {
            result=array[i];
        }
    }
    return result;
}