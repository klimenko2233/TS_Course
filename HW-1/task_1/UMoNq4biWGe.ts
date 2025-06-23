let strDay : string | null = prompt("Enter number from 1 to 31");
if (strDay !== null) {
    let day : number = +strDay;
    if (day < 1 || day > 31) {
        console.log("Enter correct number");
    } else if (day >= 1 && day <= 10) {
        console.log("It's first decade")
    } else if (day > 10 && day <= 20) {
        console.log("It's second decade")
    } else {
        console.log("It's third decade")
    }
}