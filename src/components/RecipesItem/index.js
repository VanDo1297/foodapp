import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {RECIPE_ITEM_HEIGHT, RECIPE_ITEM_MARGIN, SCREEN_WIDTH, recipeNumColums} from '../../AppStyles';
import {mapCatagory} from '../../mapper/recipes';
function RecipeItem(props){
    const { onPressRecipeItem}= props;
    const {item}= props.item
    return (
        <TouchableOpacity onPress={()=> onPressRecipeItem(item.recipeId)}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:item.photo_url}} />
                <Text style={styles.recipe_name}>{item.title}</Text>
                <Text style={styles.category_title}>{!!mapCatagory(item.categoryId) && mapCatagory(item.categoryId).name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        marginLeft: RECIPE_ITEM_MARGIN,
        marginTop: 20,
        width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: RECIPE_ITEM_HEIGHT + 80,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 15,
        position:'relative'
    },
    image: {
        width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height:RECIPE_ITEM_HEIGHT,
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    recipe_name:{
        fontSize:16,
        fontWeight:"400",
        marginTop:10,
    },
    category_title:{
        fontSize:16,
        fontWeight:"400",
        marginTop:10,
        position:"absolute",
        bottom:10
    }
})

export default RecipeItem