import { categories, recipes } from '../data/mockData';

export const mapLengthCategory=()=>{
    const result = []

    categories.map(c=>{
        let cI = []
        recipes.map(r =>{
            if(r.categoryId === c.id){
                cI.push(r)
            }
        })
        result.push({
            id: c.id,
            length : cI.length
        })
    })

    return result
}

export const mapLengthCategoryToId=(categoryId)=>{
    let categoriesLength = mapLengthCategory();
    let result = 0;
    categoriesLength.map(c =>{
        if(c.id === categoryId){
            result = c.length
        }
    })

    return result;
}
