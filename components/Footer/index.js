import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { FooterTab, Button, Icon } from 'native-base';


export default class FooterBar extends Component {
  render() {
    return (
          <FooterTab style={styles.viewStyle} >
            <Button
            onPress={() => this.props.navigation.navigate('Home')}
            >
              <Icon name="home-outline" style={{color:'white'}}/>
            </Button>
            <Button transparent
              onPress={() => this.props.navigation.navigate('Continue')}
            >
              <Icon name="play-outline" style={{color:'white'}}/>
            </Button>
            <Button
            onPress={() => this.props.navigation.navigate('Download')}
            >
              <Icon name="download-outline" style={{color:'white'}}/>
            </Button>
          </FooterTab>
    );
  }
}


const styles = StyleSheet.create({
    viewStyle:{
        position: 'absolute',
        backgroundColor: 'black',
        alignSelf: 'center',
        opacity: 0.6,
        width: '75%',
        bottom: 0,
        borderRadius: 40,
        marginBottom: 50,
    },
})