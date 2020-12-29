import React,{useEffect} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import {recipes} from '../../data/mockData';
import RecipeItem from '../../components/RecipesItem';
import HambugerImage from '../../assets/images/menu.png'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Home(props){

    useEffect(() => { 
        props.navigation.setOptions({ 
            headerTitle: 'Home',
            headerLeft: (
               ()=> <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
                        <Image style={{marginLeft:10}} source={HambugerImage} />
                    </TouchableOpacity>
            )
        }) 
    }, [])

    return (
        <View>
            <FlatList 
                keyExtractor={(item, index) => index.toString()}
                data={recipes}
                vertical={true}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={(item)=>RecipeItem(item)}
            />
        </View>
    )
}

export default Home;