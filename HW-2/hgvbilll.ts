// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
type Course3 = {
  title: string;
  monthDuration: number;
  hourDuration: number;
  modules: string[];
}
let coursesArray:Course3[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (const course of coursesArray) {
    let div:HTMLDivElement= document.createElement('div');
    div.classList.add('course');
    for (const property in course) {
        if( property === 'monthDuration' ) {
            let durationsDiv:HTMLDivElement = document.createElement('div');
            durationsDiv.classList.add('durations');
            let monthDiv:HTMLDivElement = document.createElement('div');
            monthDiv.classList.add('month');
            monthDiv.innerText = `monthDuration: ${course.monthDuration}`;
            let hourDiv:HTMLDivElement = document.createElement('div');
            hourDiv.classList.add('hour');
            hourDiv.innerText = `hourDuration: ${course.hourDuration}`;
            durationsDiv.append(monthDiv, hourDiv);
            div.appendChild(durationsDiv);
        }
        else if( property === 'hourDuration' ) {}
        else if (property === 'modules') {
            let modulesDiv:HTMLDivElement = document.createElement('div');
            modulesDiv.classList.add('modules');
            let label:HTMLSpanElement = document.createElement('span');
            label.innerText = 'Modules:';
            modulesDiv.appendChild(label);
            let ul:HTMLUListElement = document.createElement('ul');
            for (const module of course.modules) {
                let li:HTMLLIElement = document.createElement('li');
                li.innerText = module;
                ul.appendChild(li);
            }
            modulesDiv.appendChild(ul);
            div.appendChild(modulesDiv);
        }
        else if (property === 'title'){
            let title:HTMLHeadingElement = document.createElement('h2');
            title.classList.add('title');
            title.innerText = course.title;
            div.appendChild(title);
        }
    }
    document.body.appendChild(div);
}