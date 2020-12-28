import {recipes, categories} from '../data/mockData'; 


export const mapCatagory=(recipes_categoryId)=>{
    return categories.find(c => c.id === recipes_categoryId);
}