import React, { Component } from 'react';
import { Text,Grid,Col } from 'native-base';
import { StyleSheet, View,ScrollView,Image  } from 'react-native';
import ScifiCarousel from './scificarousel'



export default class ScifiTab extends Component{
    render(){
        return (
            <ScrollView  style={{backgroundColor:'#222222'}}>

                {/* Movie Carousel */}
                <ScifiCarousel />

                {/* Movie Genre Grid */}
                <View style={{marginTop: 15}}>

                    {/* Most Watched */}
                    <Text style={styles.scifiTitleStyles}>Most Watched</Text>
                    <Grid style={styles.scifiGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/Most/planet_apes.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20,}}>
                            <Image source={require('../../../assets/images/ScifiTab/Most/avatar.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/Most/gravity.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Recommended Scifi Movies */}
                    <Text style={styles.scifiTitleStyles}>Recommended Movies</Text>
                    <Grid style={styles.scifiGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/RecommendedMovies/arival.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20,}}>
                            <Image source={require('../../../assets/images/ScifiTab/RecommendedMovies/jurassic.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/RecommendedMovies/mad_max.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Recommended Scifi Series */}
                    <Text style={styles.scifiTitleStyles}>Recommended TV Shows</Text>
                    <Grid style={styles.scifiGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/RecommendedSeries/arrow.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/RecommendedSeries/black_mirror.png')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/RecommendedSeries/west_world.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* New Scifi Movies*/}
                    <Text style={styles.scifiTitleStyles}>New Sci-Fi Movies</Text>
                    <Grid style={styles.scifiGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/NewMovies/ready_player.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/NewMovies/elysium.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/NewMovies/oblivian.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* New Scifi TV Shows*/}
                    <Text style={styles.scifiTitleStyles}>New Sci-Fi TV Shows</Text>
                    <Grid style={styles.scifiGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/NewShows/stranger_things.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/NewShows/punisher.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/NewShows/flash.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Animated Anime*/}
                    <Text style={styles.scifiTitleStyles}>Animated</Text>
                    <Grid style={styles.lastscifiGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/Animated/rick_morty.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/Animated/dr_stone.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/ScifiTab/Animated/gravity_falls.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                </View>
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({

    scifiGridStyle: {
        padding: 5,
        marginTop: 10,
        marginBottom: 25
    },
    lastscifiGridStyle: {
        padding: 5,
        marginTop: 10,
        marginBottom: 40
    },

    scifiTitleStyles:{
        marginLeft: 10,
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Roboto_medium'
    },
    

})

