import React from 'react';
import {View, Text, Button} from 'react-native';

function Login(props){
    return (
        <View>
            <Text>Login</Text>
            <Button title='Go to Home!' onPress={()=>props.navigation.navigate('Home')}></Button>
        </View>
    )
}

export default Login;