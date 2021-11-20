import React, { Component } from 'react';
import { View } from 'react-native';
import HomeTabs from '../components/Tabs';
import FooterBar from '../components/Footer';
import HeaderBar from '../components/Header';


export default class HomeScreen extends Component{
    render(){
        return (
          <View style={{position: 'absolute'}}>
              <HeaderBar navigation={this.props.navigation}/>
              <HomeTabs />
              <FooterBar navigation={this.props.navigation}/>
          </View>
        );
    }
}

