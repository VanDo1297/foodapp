import React from 'react';
import { TouchableHighlight, Image, Text, View, StyleSheet } from 'react-native';
import {mapLengthCategoryToId} from '../../mapper/category';

function CategoryItem(props){
    const { item } = props
    return (
        <TouchableHighlight >
            <View style={styles.content}>
                <Image source={{uri:item.photo_url}} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.lenght}>{mapLengthCategoryToId(item.id)} recipes</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        margin: 10,
        marginBottom:20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 235,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 20,
    },
    image:{
        width: '100%',
        height: 175,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    name:{
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333333',
        marginTop: 8
    },
    lenght:{
        marginTop: 3,
        marginBottom: 5
    }

})

export default CategoryItem;

