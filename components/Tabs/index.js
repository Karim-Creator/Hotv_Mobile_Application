import React, { Component } from 'react';
import { Container, ScrollableTab , Tab, Tabs } from 'native-base';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';


export default class HomeTabs extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#141313'}}>

        {/* Tabs */}
        <Tabs locked renderTabBar={()=> <ScrollableTab style={{borderWidth:0}}/>} tabBarUnderlineStyle={{height:3.5,backgroundColor:'#E50914'}}>

          {/* Movies Tab */}
          <Tab heading="Movies" tabStyle={{backgroundColor:'#141313'}} activeTabStyle={{backgroundColor: '#141313'}} activeTextStyle={{color:'#E50914',fontFamily:'Roboto_medium'}}>
            <Tab1/>
          </Tab>

          {/* TVShows Tab */}
          <Tab heading="TV Shows" tabStyle={{backgroundColor:'#141313'}} activeTabStyle={{backgroundColor: '#141313'}} activeTextStyle={{color:'#E50914',fontFamily:'Roboto_medium'}}>
            <Tab2 />
          </Tab>

          {/* Comedy Tab */}
          <Tab heading="Comedy" tabStyle={{backgroundColor:'#141313'}} activeTabStyle={{backgroundColor: '#141313'}} activeTextStyle={{color:'#E50914',fontFamily:'Roboto_medium'}}>
            <Tab3 />
          </Tab>

          {/* Horror Tab */}
          <Tab heading="Horror" tabStyle={{backgroundColor:'#141313'}} activeTabStyle={{backgroundColor: '#141313'}} activeTextStyle={{color:'#E50914',fontFamily:'Roboto_medium'}}>
            <Tab4 />
          </Tab>

          {/* Sci-Fi Tab */}
          <Tab heading="Sci-Fi" tabStyle={{backgroundColor:'#141313'}} activeTabStyle={{backgroundColor: '#141313'}} activeTextStyle={{color:'#E50914',fontFamily:'Roboto_medium'}}>
            <Tab5 />
          </Tab>
          
        </Tabs>
      </Container>
    );
  }
}