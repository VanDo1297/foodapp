import React,{useEffect, useState} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native'; 
import {getRecipeByIngredient} from '../../mapper/recipes';
import {getNameIngredient, getIngredientData} from '../../mapper/ingredients';
import RecipeItem from '../../components/RecipesItem';

function RecipeByIngredient({route, navigation}){
    const {id}= route.params;
    const [recipes, setRecipes]= useState([])
    const [ingredient, setIngredient]= useState({})

    useEffect(()=>{
        navigation.setOptions({ 
            headerTitle:getNameIngredient(id) ,
        }) 
        const data = getRecipeByIngredient(id);
        const ingredientData = getIngredientData(id);
        setIngredient(ingredientData);
        setRecipes(data)
    },[id])

    const onPressRecipeItem =(recipeId)=>{
        navigation.navigate('Details', {
            itemId: recipeId,
        });
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imageBg} source={{uri:ingredient.photo_url}} />
            <View style={styles.infomation}>
                <Text style={styles.text}>Recipes with {ingredient.name}:</Text>
                <FlatList 
                    data={recipes}
                    vertical={true}
                    numColumns={2}
                    keyExtractor={(item, index)=> index.toString()}
                    renderItem={(item)=> <RecipeItem item={item} onPressRecipeItem={onPressRecipeItem}/>}
                
                />
            </View>
        </View>
    )

}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white'
    },
    imageBg:{
        width: '100%',
        height: 280
    },
    infomation:{
        flex:1,
        borderColor:'gray',
        borderTopWidth: 1,
    }
    ,text:{
        marginTop:10,
        marginLeft:10,
        fontSize:20,
        fontWeight:'bold',
    }
})

export default RecipeByIngredient;