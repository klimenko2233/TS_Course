type Recipe = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
};
type RecipesResponse = {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
};
fetch('https://dummyjson.com/recipes')
    .then((res: Response) => res.json())
    .then((recipesObj: RecipesResponse) => {
        const { recipes } = recipesObj;

        for (const recipe of recipes) {
            const dishDiv: HTMLDivElement = document.createElement('div');
            const title: HTMLHeadingElement = document.createElement('h2');
            title.innerText = recipe.name;
            dishDiv.appendChild(title);
            const image: HTMLImageElement = document.createElement('img');
            image.src = recipe.image;
            image.style.width = '300px';
            image.style.height = 'auto';
            dishDiv.appendChild(image);
            const h4: HTMLHeadingElement = document.createElement('h4');
            h4.innerText = 'Ingredients:';
            dishDiv.appendChild(h4);
            const ingredientsUl: HTMLUListElement = document.createElement('ul');
            for (const ingredient of recipe.ingredients) {
                const li: HTMLLIElement = document.createElement('li');
                li.textContent = ingredient;
                ingredientsUl.appendChild(li);
            }
            dishDiv.appendChild(ingredientsUl);
            const otherInfo: HTMLDivElement = document.createElement('div');
            otherInfo.innerText = `
                id: ${recipe.id},
                Instructions: ${recipe.instructions},
                Prep Time (min): ${recipe.prepTimeMinutes},
                Cook Time (min): ${recipe.cookTimeMinutes},
                Servings: ${recipe.servings},
                Difficulty: ${recipe.difficulty},
                Cuisine: ${recipe.cuisine},
                Calories per serving: ${recipe.caloriesPerServing},
                Tags: ${recipe.tags.join(', ')},
                UserId: ${recipe.userId},
                Rating: ${recipe.rating},
                ReviewCount: ${recipe.reviewCount},
                Meal Type: ${recipe.mealType.join(', ')}
            `;
            dishDiv.appendChild(otherInfo);
            const hr: HTMLHRElement = document.createElement('hr');
            document.body.append(dishDiv, hr);
        }
    })
    .catch((error: unknown) => {
        console.error('Ошибка при получении рецептов:', error);
    });

