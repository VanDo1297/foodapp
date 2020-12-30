import {recipes, categories, ingredients} from '../data/mockData'; 


export const mapCatagory=(recipes_categoryId)=>{
    return categories.find(c => c.id === recipes_categoryId);
}

export const getRecipeDetails=(recipeId)=>{
   return recipes.find(r => r.recipeId === recipeId)
}

export const getNameRecipe=(recipeId)=>{
    return recipes.find(r => r.recipeId === recipeId).title
}

export const getRecipeByIngredient=(ingredientId)=>{
    let result = []
    
    recipes.map(recipe =>{
        recipe.ingredients.map(ingredient =>{
            if(ingredient[0] === ingredientId){
                result.push(recipe)
            }
        })
    })
    return result;
}