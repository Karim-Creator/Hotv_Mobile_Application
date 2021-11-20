import React, { Component } from 'react';
import { Text,Button, Icon, Body } from 'native-base';
import { StyleSheet, View,Image   } from 'react-native';
import { Col,Grid } from 'react-native-easy-grid';
import * as firebase from 'firebase';


//Logout Function
const signOut = () => {
  return firebase.auth().signOut()
   .then(() => {
      console.log("Logged Out!")
   })
   .catch(error => console.log(error))
}


export default class AccountScreen extends Component{
    render(){
        return (
          <View style={{backgroundColor:'#141313'}}>
            <View style={styles.titleViewStyles}>
              <Button style={{backgroundColor:'#141313'}}
              onPress={() => this.props.navigation.navigate('Home')}
              >
                <Icon name='chevron-back' style={{color: 'white'}}/>
              </Button>
                <Body style={{marginBottom: 5}}>
                    <Text style={styles.titleTextStyles}>Account</Text>
                </Body>
            </View>
            <View style={{backgroundColor:'#141313'}}>
              <Text style={{alignSelf: 'center',color:'#909090', fontSize: 20,fontFamily:'Roboto_medium',letterSpacing: 1}}>
                Who's Watching ?
              </Text>
            </View>

            <View style={{padding: 10,height: '100%', backgroundColor:'#141313'}}>
              <Text style={{color:'#909090',paddingLeft: 15,marginBottom: 0}}>
                People
              </Text>
              <Grid style={{margin: 5}}>
                <Col style={{ backgroundColor: '#000', height: 200,marginRight: 10,borderRadius: 10 }}
                onPress={() => this.props.navigation.navigate('Me')}
                >
                  <Image source={require('../assets/images/Users/me.jpg')} style={{height: 100,width: 100,alignSelf: 'center',alignItems:'center',resizeMode: 'cover',top: '10%',overflow:'hidden',borderRadius: 150 / 2,}}/>
                  <Text style={styles.accountNameStyle}>ME</Text>
                </Col>
                <Col style={{ backgroundColor: '#00CE9F', height: 200,borderRadius: 10  }}>
                 <Image source={require('../assets/images/Users/squidward.jpg')} style={{height: 100,width: 100,alignSelf: 'center',alignItems:'center',resizeMode: 'cover',top: '10%',overflow:'hidden',borderRadius: 150 / 2,}}/>
                 <Text style={styles.accountNameStyle}>SQUIDWARD</Text>
                </Col>
              </Grid>
              <Grid style={{bottom: '54%', margin: 5}}>
                <Col style={{ backgroundColor: '#F48024', height: 200, marginRight: 10,borderRadius: 10  }}>
                <Image source={require('../assets/images/Users/summer.jpg')} style={{height: 100, width: 100,alignSelf: 'center',alignItems:'center',resizeMode: 'cover',top: '10%',overflow:'hidden',borderRadius: 150 / 2,}}/>
                <Text style={styles.accountNameStyle}>SUMMER</Text>
                </Col>
                <Col style={{ backgroundColor: '#dc143c', height: 200,borderRadius: 10  }}>
                <Image source={require('../assets/images/Users/rick.png')} style={{height: 100,width: 100,alignSelf: 'center',alignItems:'center',resizeMode: 'cover',top: '10%',borderRadius: 150 / 2,}}/>
                <Text style={styles.accountNameStyle}>RICK</Text>
                </Col>
              </Grid>
              <View style={{position:'absolute', bottom: 0, left: 0, right: 0,top: 460, backgroundColor:'#141313'}}>

                <Button style={{alignSelf:'center', marginTop: 30, borderRadius: 20, padding: 60, backgroundColor: '#E50914' }}
                onPress={() => signOut()}
                >
                  <Text>Logout</Text>
                </Button>

              </View>
            </View>
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
  },
  
  accountNameStyle:{
    color:'#fff',
    top: '20%',
    textAlign:'center',
    justifyContent: 'center',
    fontSize: 22,
    fontFamily:'Roboto_bold'
  }
})


