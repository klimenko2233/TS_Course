async function foobar<T>(url:string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json() as T;
}


type User4 = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
};
type UsersResponse = {
    users: User4[];
    total: number;
    skip: number;
    limit: number;
};


foobar<UsersResponse>('https://dummyjson.com/users')
    .then((data) => {
        const container = document.createElement('div');

        data.users.forEach((user) => {
            const div = document.createElement('div');
            div.innerText = `${user.id}. ${user.firstName} ${user.lastName} (${user.age} y.o) — ${user.email}`;
            container.appendChild(div);
        });

        document.body.appendChild(container);
    })
    .catch((err) => {
        console.error('Ошибка загрузки:', err);
    });
