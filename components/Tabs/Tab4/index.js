import React, { Component } from 'react';
import { Text,Grid,Col } from 'native-base';
import { StyleSheet, View,ScrollView,Image  } from 'react-native';
import HorrorCarousel from './horrorcarousel'



export default class HorrorTab extends Component{
    render(){
        return (
            <ScrollView  style={{backgroundColor:'#222222'}}>

                {/* Movie Carousel */}
                <HorrorCarousel />

                {/* Movie Genre Grid */}
                <View style={{marginTop: 15}}>

                    {/* Most Watched */}
                    <Text style={styles.horrorTitleStyles}>Most Watched</Text>
                    <Grid style={styles.horrorGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/Most/us.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20,}}>
                            <Image source={require('../../../assets/images/HorrorTab/Most/get_out.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/Most/quiet_place.png')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Not Recommended Horror Movies */}
                    <Text style={styles.horrorTitleStyles}>Not Recommended Movies</Text>
                    <Grid style={styles.horrorGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/NotRecommendedMovies/conjuring.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20,}}>
                            <Image source={require('../../../assets/images/HorrorTab/NotRecommendedMovies/witch.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/NotRecommendedMovies/breathe.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Not Recommended Horror Series Movies */}
                    <Text style={styles.horrorTitleStyles}>Not Recommended TV Shows</Text>
                    <Grid style={styles.horrorGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/NotRecommendedSeries/hannibal.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/NotRecommendedSeries/walking_dead.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/NotRecommendedSeries/supernatural.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* New Horror Movies*/}
                    <Text style={styles.horrorTitleStyles}>New Horror Movies</Text>
                    <Grid style={styles.horrorGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/NewMovies/hunt.png')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/NewMovies/freaky.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/NewMovies/relic.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* New Horror TV Shows*/}
                    <Text style={styles.horrorTitleStyles}>New Horror TV Shows</Text>
                    <Grid style={styles.horrorGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/NewShows/izombie.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/NewShows/horror_story.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/NewShows/scream.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Animated Anime*/}
                    <Text style={styles.horrorTitleStyles}>Animated</Text>
                    <Grid style={styles.lasthorrorGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/Animated/neverland.png')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/Animated/elfen_lied.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/HorrorTab/Animated/future_diary.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                </View>
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({

    horrorGridStyle: {
        padding: 5,
        marginTop: 10,
        marginBottom: 25
    },
    lasthorrorGridStyle: {
        padding: 5,
        marginTop: 10,
        marginBottom: 40
    },

    horrorTitleStyles:{
        marginLeft: 10,
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Roboto_medium'
    },
    

})

