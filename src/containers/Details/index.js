import React,{ useEffect, useState } from 'react';
import {View, Image, ScrollView, TouchableHighlight,Text,  StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {getRecipeDetails, mapCatagory} from '../../mapper/recipes';
import Carousel, { Pagination } from 'react-native-snap-carousel';
const { width: viewportWidth } = Dimensions.get('window');
function Details({route, navigation}){
    const { itemId } = route.params;
    const [recipeItem, setRecipeItem] = useState({});
    const [activeSlide, setActiveSlide]= useState(0);

    useEffect(()=>{
        navigation.setOptions({ 
            headerTitle: 'Home',
            headerShown:false,
            headerMode :"none"
        }) 
    },[])

    useEffect(()=>{
        const data = getRecipeDetails(itemId)
        setRecipeItem(data)
    },[itemId])

    const handleBack =()=> {
        navigation.goBack();
    }

    const handleViewIngredient =(id)=> {
        navigation.navigate('Ingredient',{
            itemId: id
        })
    }

    const renderImage = ({ item }) => (
        <TouchableHighlight>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item }} />
            </View>
        </TouchableHighlight>
    );
    return(
        <ScrollView style={styles.container}>
            <View style={styles.carouselContainer}>
                <View>
                    <Carousel
                        data={recipeItem && recipeItem.photosArray || []}
                        renderItem={renderImage}
                        sliderWidth={viewportWidth}
                        itemWidth={viewportWidth}
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1}
                        firstItem={0}
                        loop={false}
                        autoplay={false}
                        autoplayDelay={500}
                        autoplayInterval={3000}
                        onSnapToItem={index => setActiveSlide(index)}
                    />
                    <Pagination
                        dotsLength={recipeItem && recipeItem.photosArray &&  recipeItem.photosArray.length || 0}
                        activeDotIndex={activeSlide}
                        containerStyle={styles.paginationContainer}
                        dotColor="rgba(255, 255, 255, 0.92)"
                        dotStyle={styles.paginationDot}
                        inactiveDotColor="white"
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                </View>
                <TouchableHighlight onPress={handleBack} style={styles.btnBack}>
                    <Image style={styles.imageBack} source={require('../../assets/images/backArrow.png')} ></Image>
                </TouchableHighlight>
            </View>
            <View style={styles.infoRecipeContainer}>
                <Text style={styles.infoRecipeName}>{recipeItem.title}</Text>
                <View style={styles.infoContainer}>
                    <TouchableHighlight>
                    <Text style={styles.category}>{!!mapCatagory(recipeItem.categoryId) && mapCatagory(recipeItem.categoryId).name}</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.infoContainer}>
                    <Image style={styles.infoPhoto} source={require('../../assets/images/time.png')} />
                    <Text style={styles.infoRecipe}>{recipeItem.time} minutes </Text>
                </View>

                <View style={styles.viewIngredient}>
                    <TouchableOpacity onPress={()=>handleViewIngredient(recipeItem.recipeId)} style={styles.btnIngredient}>
                        <Text style={styles.category}>View Ingredients</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoDescriptionRecipe}>{recipeItem.description}</Text>
                </View>
            </View>

        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    carouselContainer: {
        minHeight: 250
    },
    btnBack:{
        position:'absolute',
        top:30,
        left:30,
        backgroundColor:'white',
        borderRadius:100,
        width:40,
        height:40,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageBack:{
        width:25,
        height:25
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: 250
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        width: viewportWidth,
        height: 250
    },
    paginationContainer: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        paddingVertical: 8,
        marginTop: 200
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 0
    },
    infoRecipeContainer: {
        flex: 1,
        margin: 25,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    infoPhoto: {
        height: 20,
        width: 20,
        marginRight: 0
    },
    infoRecipe: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    category: {
        fontSize: 14,
        fontWeight: 'bold',
        margin: 10,
        color: '#2cd18a'
    },
    infoDescriptionRecipe: {
        textAlign: 'left',
        fontSize: 16,
        marginTop: 30,
        margin: 15
    },
    infoRecipeName: {
        fontSize: 28,
        margin: 10,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    viewIngredient:{
        width: viewportWidth * 80 / 100,
        borderRadius:30,
        height:60,
        marginTop:20,
        borderWidth: 2,
        borderColor: '#2cd18a',
    },
    btnIngredient:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    }
})

export default Details