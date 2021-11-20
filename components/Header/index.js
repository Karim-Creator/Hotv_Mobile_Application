import React, { Component } from 'react';
import { StyleSheet,Animated,StatusBar } from 'react-native'
import { Header, Left, Body, Right, Button, Icon, Title, View, Text, Item, Input } from 'native-base';


export default class HeaderBar extends Component {

    // Hide or Show Search Bar When Pressed
    constructor(props) {
        super(props);
        this.state = {
          isModalVisible : false,
          animation: new Animated.Value(0)
        };
        this.onPress = this.onPress.bind(this);
        
      }

    //Hide/Show When Pressed
    onPress() {
        this.setState({isHidden: !this.state.isHidden})
      }

      // Toggle Search Animation
      toggleModal = () => {
        this.setState((prevState) => {
          Animated.spring(this.state.animation, {
            toValue: prevState.isModalVisible ? 0 : 1,
            useNativeDriver: false,
          }).start()
          return {
            isModalVisible: !prevState.isModalVisible
          }
        })
      };
      

    render() {
      
    return (
      <View style={{backgroundColor:'#000'}}>
        <Header style={styles.headerViewStyles}>
        <StatusBar barStyle="light-content" backgroundColor="#141313" />
          <Left style={{flex: 1}}>
            <Button transparent
            onPress={() => { this.props.navigation.navigate("Account");}}
            >
              <Icon name='person' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleStyles}>Hotv</Title>
          </Body>
          <Right>
            <Button transparent
            onPress={() => {

                this.onPress();
                this.toggleModal();
                
               }}
            >
              <Icon name='search' />
            </Button>
          </Right>
        </Header>

        {/* Animation */}
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              left: this.state.animation.interpolate({
                inputRange: [0, 1],
                outputRange: [600, 0],
              })
            }
          ]}
        >

        {/* Hide And Show Search Bar */}
        {this.state.isHidden ? 

        // If Pressed Show Search Bar
        <View style={styles.searchViewStyles}>
        <Header searchBar rounded style={{backgroundColor:'#141313'}}>
        <StatusBar barStyle="light-content" backgroundColor="#141313" />
          <Item style={{borderRadius: 20}}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        </View>
        //Else Return Null
        : null}

        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    headerViewStyles: {
        backgroundColor: '#141313',
    },

    titleStyles: {
        color: '#E50914',
        fontWeight:'700',
        fontSize: 30,
        alignSelf: 'center',
        letterSpacing: 3

    },

    searchViewStyles: {
        backgroundColor: '#141313',
        height: 60,
        padding: 5,
    },

    fadingContainer: {
      backgroundColor:'#141313'
    }

})