// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400
type Values ={currency:string,value:number};
function exchange(sumUAH:number, currencyValues:Values[], exchangeCurrency:string):number {
    for (const element of currencyValues) {
        if (element.currency === exchangeCurrency) {
            return  sumUAH/element.value;
        }
    }
    return -Infinity;
}

let curr_values = [
    {
        currency: 'USD',
        value: 41.8
    },
    {
        currency: 'EUR',
        value: 47.1
    },
    {
        currency: 'PLN',
        value: 11.1
    }
]

console.log(exchange(20000,curr_values,'USD'));
console.log(exchange(20000,curr_values,'PLN'));
console.log(exchange(20000,curr_values,'EUR'));
console.log(exchange(20000,curr_values,'skjdnfkjns'));