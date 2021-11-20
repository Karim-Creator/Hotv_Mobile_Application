import React, { Component } from 'react';
import { Text,Grid,Col, } from 'native-base';
import { StyleSheet, View,ScrollView,Image  } from 'react-native';
import TvShowCarousel from './tvshowscarousel'



export default class TvShowTab extends Component{
    render(){
        return (
            <ScrollView  style={{backgroundColor:'#222222'}}>

                {/* Movie Carousel */}
                <TvShowCarousel />

                {/* Movie Genre Grid */}
                <View style={{marginTop: 15}}>

                    {/* Most Watched This Week Movies */}
                    <Text style={styles.tvShowsTitleStyles}>Most Watched This Week</Text>
                    <Grid style={styles.tvShowsGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/Most/rick_morty.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20,}}>
                            <Image source={require('../../../assets/images/TvShowsTab/Most/witcher.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/Most/stranger_things.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Famous TV Shows */}
                    <Text style={styles.tvShowsTitleStyles}>Famous TV Shows</Text>
                    <Grid style={styles.tvShowsGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/Famous/one_hundred.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20,}}>
                            <Image source={require('../../../assets/images/TvShowsTab/Famous/Game_of_Thrones.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/Famous/sherlock.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Best TV Shows */}
                    <Text style={styles.tvShowsTitleStyles}>Best TV Shows</Text>
                    <Grid style={styles.tvShowsGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/Best/house.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/Best/vikings.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/Best/mr_robot.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Netflix TV Shows */}
                    <Text style={styles.tvShowsTitleStyles}>Netflix Original</Text>
                    <Grid style={styles.tvShowsGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/Netflix/lucifer.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/Netflix/casa_de_papel.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/Netflix/originals.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Animated TV Shows */}
                    <Text style={styles.tvShowsTitleStyles}>Animated</Text>
                    <Grid style={styles.tvShowsGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/Animated/simpsons.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/Animated/castlevania.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/Animated/attack_on_titan.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>


                    {/* New TV Shows */}
                    <Text style={styles.tvShowsTitleStyles}>New TV Shows</Text>
                    <Grid style={styles.lastTvShowsGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/New/queen_gambit.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/New/you.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/TvShowsTab/New/black_mirror.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>
                </View>
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({

    tvShowsGridStyle: {
        padding: 5,
        marginTop: 10,
        marginBottom: 25
    },
    lastTvShowsGridStyle: {
        padding: 5,
        marginTop: 10,
        marginBottom: 40
    },

    tvShowsTitleStyles:{
        marginLeft: 10,
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Roboto_medium'
    },
    

})

