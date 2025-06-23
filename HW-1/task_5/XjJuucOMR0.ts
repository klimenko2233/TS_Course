// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)
// @ts-ignore
function User(this:any,id:number,name:string,surname:string,email:string,phone:string){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
type User2 =  {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
}
let user2s:User2[] = [
    new (User as any)(2,'Mariia','Sydorenko','sydor@gmail.com','+380951925547'),
    new (User as any)(3,'Olena','Holub','holub@gmail.com','+380931875527'),
    new (User as any)(4,'Mykola','Zakharchenko','kolyamba@gmail.com','+380632536547'),
    new (User as any)(5,'Oksana','Moroz','oymoroz@gmail.com','+380669975347'),
    new (User as any)(1,'Petro','Petrenko','petpet@gmail.com','+380501925141'),
    new (User as any)(6,'Petro','Petrenko','petpet@gmail.com','+380501925141'),
    new (User as any)(7,'Mariia','Sydorenko','sydor@gmail.com','+380951925547'),
    new (User as any)(8,'Olena','Holub','holub@gmail.com','+380931875527'),
    new (User as any)(9,'Mykola','Zakharchenko','kolyamba@gmail.com','+380632536547'),
    new (User as any)(10,'Oksana','Moroz','oymoroz@gmail.com','+380669975347')
];