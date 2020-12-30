import React,{useEffect , useState} from 'react';
import {FlatList, ScrollView, Text, View, StyleSheet, Image} from 'react-native';
import {getIngredient} from '../../mapper/ingredients';
import {getNameRecipe} from '../../mapper/recipes';
import RecipeItem from '../../components/RecipesItem';
import {RECIPE_ITEM_HEIGHT, RECIPE_ITEM_MARGIN, SCREEN_WIDTH, ingredientNumColums} from '../../AppStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Ingredient({route, navigation}){
    const { itemId } = route.params;
    const [ingredientData, setIngredientData]= useState([])

    useEffect(()=>{

        if(itemId){
            navigation.setOptions({ 
                headerTitle: `Ingredient for ${getNameRecipe(itemId)}`,
            }) 
        }
        const data = getIngredient(itemId);
        setIngredientData(data)

    },[itemId])

    const handleClickIngredientItem =(ingredientId)=>{
        navigation.navigate("RecipeByIngerdient",{
            id: ingredientId
        })
    }

    const renderItem =(ingredientItem)=>{
        const {item} = ingredientItem;
        return (
            <TouchableOpacity onPress={()=>handleClickIngredientItem(item.id)}>
                <View style={styles.ingredientContainer}>
                    <Image style={styles.ingredientImage} source={{uri: item.photo_url}} />
                    <Text style={styles.ingredientName}>{item.name}</Text>
                    <Text style={styles.ingredientQuality}>{item.quality}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView style={{backgroundColor:'white'}}>
            {
                ingredientData && ingredientData.length > 0 ? (
                    <FlatList 
                        keyExtractor={(item, index) => index.toString()}
                        data={ingredientData}
                        vertical={true}
                        showsVerticalScrollIndicator={false}
                        numColumns={3}
                        renderItem={(item)=> renderItem(item)}
                    />
                ) : (
                    <View><Text>No Infomation.</Text></View>
                )
            }
            
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    ingredientContainer:{
        flex: 1,
        alignItems: 'center',
        margin: 10,
        marginTop: 30,
        width: (SCREEN_WIDTH - 20) / ingredientNumColums - 10,
        height: 160
    },
    ingredientImage:{
        width: (SCREEN_WIDTH - 20) / ingredientNumColums - 10,
        height: 100,
        borderRadius: 60
    },
    ingredientName:{
        margin: 10,
        marginBottom: 5,
        color: 'black',
        fontSize: 13,
        textAlign: 'center',
        height:30
    },
    ingredientQuality:{
        margin: 10,
        marginBottom: 5,
        fontSize: 12,
        color: 'gray',
        textAlign: 'center'
    }
})

export default Ingredient;