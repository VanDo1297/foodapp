import React,{useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import {categories} from '../../data/mockData';
import CategoryItem from '../../components/CategoryItem';
import BackButton from '../../assets/images/back.png';

function Category(props){
    useEffect(() => { 
        props.navigation.setOptions({ 
            headerTitle: 'Categories',
            headerLeft: (
               ()=> <TouchableOpacity onPress={()=>props.navigation.navigate('Home')}>
                        <Image style={{marginLeft:10, width:20, height:20}} source={BackButton} />
                    </TouchableOpacity>
            )
        }) 
    }, [])
    return (
        <View >
            <FlatList
                data={categories}
                renderItem={(item)=> CategoryItem(item)}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default Category;