// – є масив
type Course1 = {
    title: string;
    monthDuration: number;
}
let coursesAndDurationArray1:Course1[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// — відсортувати його за спаданням за monthDuration
let sort_by_month = coursesAndDurationArray1.sort((a,b)=>b.monthDuration-a.monthDuration);
console.log(sort_by_month);

// — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
let filteredCourses = coursesAndDurationArray1.filter(value => value.monthDuration>5);
console.log(filteredCourses);

// — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let array_with_id = filteredCourses.map((value, index) =>{
    return {...value,id:index+1};
} );
console.log(array_with_id);