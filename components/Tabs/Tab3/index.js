import React, { Component } from 'react';
import { Text,Grid,Col, } from 'native-base';
import { StyleSheet, View,ScrollView,Image  } from 'react-native';
import ComedyCarousel from './comedycarousel'



export default class ComedyTab extends Component{
    render(){
        return (
            <ScrollView  style={{backgroundColor:'#222222'}}>

                {/* Movie Carousel */}
                <ComedyCarousel />

                {/* Movie Genre Grid */}
                <View style={{marginTop: 15}}>

                    {/* Most Watched This Week Movies */}
                    <Text style={styles.comedyTitleStyles}>Most Watched This Week</Text>
                    <Grid style={styles.comedyGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/Most/home_alone.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20,}}>
                            <Image source={require('../../../assets/images/ComedyTab/Most/rick_morty.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/Most/men_want.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Famous Comedy Movies */}
                    <Text style={styles.comedyTitleStyles}>Famous Comedy Movies</Text>
                    <Grid style={styles.comedyGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/FamousMovies/jumanji.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20,}}>
                            <Image source={require('../../../assets/images/ComedyTab/FamousMovies/bad_boys.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/FamousMovies/museum.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Famous Comedy TV Shows */}
                    <Text style={styles.comedyTitleStyles}>Famous Comedy TV Shows</Text>
                    <Grid style={styles.comedyGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/FamousShows/friends.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/FamousShows/office.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/FamousShows/family_guy.jpeg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* New Comedy Movies*/}
                    <Text style={styles.comedyTitleStyles}>New Comedy Movies</Text>
                    <Grid style={styles.comedyGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/NewMovies/bay_watch.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/NewMovies/hangover.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/NewMovies/borat.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* New Comedy TV Shows*/}
                    <Text style={styles.comedyTitleStyles}>New Comedy TV Shows</Text>
                    <Grid style={styles.comedyGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/NewShows/bojack.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/NewShows/not_okay.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/NewShows/not_okay_with_this.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Animated TV Shows & Movies */}
                    <Text style={styles.comedyTitleStyles}>Animated</Text>
                    <Grid style={styles.comedyGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/Animated/oggy.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/Animated/spongebob.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/Animated/parasyte.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>


                    {/* Family Friendly TV Shows & Movies */}
                    <Text style={styles.comedyTitleStyles}>Family Friendly</Text>
                    <Grid style={styles.lastComedyGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/Family/shaun_sheep.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/Family/earth.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ComedyTab/Family/pup.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>
                </View>
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({

    comedyGridStyle: {
        padding: 5,
        marginTop: 10,
        marginBottom: 25
    },
    lastComedyGridStyle: {
        padding: 5,
        marginTop: 10,
        marginBottom: 40
    },

    comedyTitleStyles:{
        marginLeft: 10,
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Roboto_medium'
    },
    

})

