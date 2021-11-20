import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Container, Content, List, ListItem, Button, View, Text, Separator,Switch, Body, Icon } from 'native-base';

export default class MeScreen extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#141313', }}>

        <ScrollView>

        <View style={styles.titleViewStyles}>
              <Button style={{backgroundColor:'#141313'}}
              onPress={() => this.props.navigation.navigate('Account')}
              >
                <Icon name='chevron-back' style={{color: 'white'}}/>
              </Button>
              <Body>
                    <Text style={styles.titleTextStyles}>Karim's<Text style={{color:'#fff'}}> Account</Text></Text>
              </Body>
            </View>

        <View
            style={{
              borderTopColor: '#222222',
              borderTopWidth: 2,
              marginTop: 10
            }}
          />

        <View style={{justifyContent:'space-around',flexDirection: 'row',marginTop: 5}}>
    
                <Image source={require('../assets/images/Users/me.jpg')} style={{height: 70,width: 70,resizeMode:'cover',borderRadius: 150 / 2}}/>
                <Text style={{color:'#fff',alignSelf:'center'}}>Karim</Text>
        
                <Button transparent style={{alignSelf:'center'}}
                onPress={() => this.props.navigation.navigate('Account')}
                >
                  <Icon name='repeat-outline' style={{color:'#fff'}}/>
                </Button>

        </View>
        <View
            style={{
              borderBottomColor: '#222222',
              borderBottomWidth: 2,
              marginTop: 10
            }}
          />
          
          
          {/* Informations List Start*/}
          <View style={styles.profileContainer}>
          <Text style={{fontSize: 20, fontWeight: '700',marginBottom: 15,color: '#E50914'}}>Your Information :</Text>
            <Content>
              <List>

                {/* Name */}
                <Separator bordered>
                  <Text style={styles.profileHeadInformationTextStyle}>Name</Text>
                </Separator>
                <ListItem>
                  <Text style={styles.profileInformationTextStyle}>Karim</Text>
                </ListItem>

                {/* Gender */}
                <Separator bordered>
                  <Text style={styles.profileHeadInformationTextStyle}>Gender</Text>
                </Separator>
                <ListItem>
                  <Text style={styles.profileInformationTextStyle}>Male</Text>
                </ListItem>

                {/* Age */}
                <Separator bordered>
                  <Text style={styles.profileHeadInformationTextStyle}>Age</Text>
                </Separator>
                <ListItem >
                  <Text style={styles.profileInformationTextStyle}>21 years</Text>
                </ListItem>

                {/* Email */}
                <Separator bordered>
                  <Text style={styles.profileHeadInformationTextStyle}>Email</Text>
                </Separator>
                <ListItem >
                  <Text style={styles.profileInformationTextStyle}>Karim*****@gmail.com</Text>
                </ListItem>

                {/* Phone Number */}
                <Separator bordered>
                  <Text style={styles.profileHeadInformationTextStyle}>Phone Number</Text>
                </Separator>
                <ListItem >
                  <Text style={styles.profileInformationTextStyle}>+212-67-**-**</Text>
                </ListItem>

                {/* Location */}
                <Separator bordered>
                  <Text style={styles.profileHeadInformationTextStyle}>Location</Text>
                </Separator>
                <ListItem style={{width: 320}}>
                  <Text style={styles.profileInformationTextStyle}>Marrakech, Guilez.</Text>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Switch value={false}/>
                    </View>
                </ListItem>
                
                <View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop: 20,paddingLeft: 15,paddingRight: 15}}>
                  
                  <Text style={{color: '#FF3333',fontWeight: 'bold'}}>Privacy Policy</Text>
                  <Text style={{color: '#FF3333',fontWeight: 'bold'}}>Safety Tips</Text>
                </View>

              </List>

            </Content>
          </View>

        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  
  profileContainer: {
    backgroundColor: '#000',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    borderRadius: 20,
    left: 0,
    right: 0,
  },

  titleViewStyles:{
    justifyContent: 'space-between',
    backgroundColor:'#141313',
    height: 50,
    flexDirection: 'row',
    alignSelf:'center',
    marginTop: 10,
    marginRight: 40,

  },

  titleTextStyles:{
    fontSize: 18,
    fontFamily: 'Roboto_medium',
    color: '#E50914',
  },
  

  mainTextStyle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    marginTop: 10,
  },

  avatarContainer: {
    left: 0,
    right: 0,
    marginTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    backgroundColor: '#fff',
  },

  profileImageStyle: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },

  profileHeadInformationTextStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'grey'
  },
  profileInformationTextStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
})

