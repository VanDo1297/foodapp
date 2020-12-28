import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DrawerItem from '../components/DrawerItem';

function Drawer(props){
    const {navigation} = props
    return (
        <View style={styles.content}>
            <View style={styles.container}>
                <DrawerItem
                    title="HOME"
                    source={require('../assets/images/home.png')}
                    onPress={() => {
                        navigation.navigate('Home');
                        navigation.closeDrawer();
                    }}
                />
                <DrawerItem
                    title="SEARCH"
                    source={require('../assets/images/search.png')}
                    onPress={() => {
                        navigation.navigate('Search');
                        navigation.closeDrawer();
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'red'
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingHorizontal: 20
    }
})

export default Drawer