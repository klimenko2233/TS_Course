let strTime: string | null = prompt("Enter number from 0 to 59");
if (strTime !== null) {
    let numTime : number = +strTime;
    if (numTime < 0 || numTime > 59) {
        console.log("Enter correct number");
    } else if (numTime >= 0 && numTime <= 15) {
        console.log("It's first quarter")
    } else if (numTime > 15 && numTime <= 30) {
        console.log("It's second quarter")
    } else if (numTime > 30 && numTime < 45) {
        console.log("It's third quarter")
    } else {
        console.log("It's fourth quarter")
    }
}