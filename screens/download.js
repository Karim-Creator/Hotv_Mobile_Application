import React, { Component } from 'react';
import { Text, Button, Icon, Body } from 'native-base';
import { StyleSheet, View } from 'react-native';
import FooterBar from '../components/Footer';
import DownloadCard from '../components/Download';

export default class DownloadScreen extends Component{
    render(){
        return (
            <View style={{backgroundColor:'#141313',position:'absolute'}}>
            <View style={styles.titleViewStyles}>
              <Button style={{backgroundColor:'#141313'}}
              onPress={() => this.props.navigation.navigate('Home')}
              >
                <Icon name='chevron-back' style={{color: 'white'}}/>
              </Button>
                <Body style={{marginBottom: 5}}>
                    <Text style={styles.titleTextStyles}> Downloads</Text>
                </Body>
            </View>
            <DownloadCard />
            <FooterBar navigation={this.props.navigation} />
          </View>
          
        );
    }
}

const styles = StyleSheet.create({
  titleViewStyles:{
    justifyContent: 'space-between',
    backgroundColor:'#141313',
    height: 50,
    flexDirection: 'row',
    marginRight: 40,
    marginTop: 10

  },

  titleTextStyles:{
    fontSize: 18,
    fontFamily: 'Roboto_medium',
    color: '#E50914',
  }
})

