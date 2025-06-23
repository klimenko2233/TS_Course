let strDay_num : string | null = prompt("Enter the day number from 1 to 7");
if (strDay_num != null) {
    let day_num : number = +strDay_num;
    if (day_num < 1 || day_num > 7) {
        console.log("Enter correct number")
    } else {
        switch (day_num) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
        }
    }
}