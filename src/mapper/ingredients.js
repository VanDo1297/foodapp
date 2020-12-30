import {recipes, ingredients} from '../data/mockData'; 

export const getIngredient =(recipeId )=>{
    const recipe = recipes.find(r => r.recipeId === recipeId);
    const ingredient = recipe.ingredients;
    const result = []
    ingredient.map(i =>{
        let temp = {}
        ingredients.map(is=>{
            if(i[0] === is.ingredientId){
                temp = {
                    id: i[0],
                    quality : i[1],
                    name: is.name,
                    photo_url: is.photo_url
                }
            }
        })
        result.push(temp)
    })

    return result;
}

export const getNameIngredient=(ingredientId)=>{
    return ingredients.find(i => i.ingredientId === ingredientId).name
}

export const getIngredientData=(ingredientId)=>{
    return ingredients.find(i => i.ingredientId === ingredientId)
}