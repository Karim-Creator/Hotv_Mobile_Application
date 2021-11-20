import React, { Component } from 'react';
import { View, Image, Text } from 'react-native'; 
import { Spinner } from 'native-base'


export default class SplashScreen extends Component {

    render(){
        return(
            <View style={{flex: 1,backgroundColor:'#000',flexDirection:'column',justifyContent:'center'}}>
                <Image source={require('../assets/images/logo/logo.png')} style={{height: '20%',width: '50%',alignSelf:'center',alignItems:'center',resizeMode:'contain'}} />
                <Spinner color='red' />
            </View>
        )
    }
}