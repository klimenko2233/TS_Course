// – взяти https://dummyjson.com/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
type Product = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
};
type Cart = {
    id: number;
    products: Product[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
};
type CartsResponse = {
    carts: Cart[];
    total: number;
    skip: number;
    limit: number;
};
fetch('https://dummyjson.com/carts')
    .then((res: Response) => res.json())
    .then((cartsObj: CartsResponse) => {
        const { carts } = cartsObj;
        for (const cart of carts) {
            const cartDiv: HTMLDivElement = document.createElement('div');
            cartDiv.innerText = `
                Cart id: ${cart.id},
                total: ${cart.total},
                discountedTotal: ${cart.discountedTotal},
                userId: ${cart.userId},
                totalProducts: ${cart.totalProducts},
                totalQuantity: ${cart.totalQuantity},
                products:
            `;
            const productsOl: HTMLOListElement = document.createElement('ol');
            for (const product of cart.products) {
                const img: HTMLImageElement = document.createElement('img');
                img.src = product.thumbnail;
                const li: HTMLLIElement = document.createElement('li');
                li.innerText = `
                    Product id: ${product.id}, 
                    title: ${product.title}, 
                    price: ${product.price}, 
                    quantity: ${product.quantity},
                    total: ${product.total},
                    discountPercentage: ${product.discountPercentage},
                    discountedTotal: ${product.discountedTotal}
                `;
                li.appendChild(img);
                productsOl.appendChild(li);
            }
            const hr: HTMLHRElement = document.createElement('hr');
            document.body.append(cartDiv, productsOl, hr);
        }
    })
    .catch((error: unknown) => {
        console.error('Ошибка при загрузке корзин:', error);
    });
