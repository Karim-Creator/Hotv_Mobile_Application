import React, { Component } from 'react';
import { Text,Grid,Col, } from 'native-base';
import { StyleSheet, View,ScrollView,Image  } from 'react-native';
import MovieCarousel from './moviescarousel'



export default class MoviesTab extends Component{
    render(){
        return (
            <ScrollView  style={{backgroundColor:'#222222'}}>

                {/* Movie Carousel */}
                <MovieCarousel />

                {/* Movie Genre Grid */}
                <View style={{marginTop: 15}}>

                    {/* Most Watched This Week Movies */}
                    <Text style={styles.moviesTitleStyles}>Most Watched This Week</Text>
                    <Grid style={styles.moviesGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/MovieTab/Most/god_father.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20,}}>
                            <Image source={require('../../../assets/images/MovieTab/Most/avatar.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/MovieTab/Most/the_wolf.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Famous Movies */}
                    <Text style={styles.moviesTitleStyles}>Famous Movies</Text>
                    <Grid style={styles.moviesGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/MovieTab/Famous/inception.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20,}}>
                            <Image source={require('../../../assets/images/MovieTab/Famous/joker.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/MovieTab/Famous/dark_knight.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Best Movies */}
                    <Text style={styles.moviesTitleStyles}>Best Movies</Text>
                    <Grid style={styles.moviesGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/MovieTab/Best/infinity_war.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/MovieTab/Best/interstellar.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/MovieTab/Best/end_game.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* Family Friendly Movies */}
                    <Text style={styles.moviesTitleStyles}>Family Friendly</Text>
                    <Grid style={styles.moviesGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/MovieTab/Family/spongebob.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/MovieTab/Family/next_gen.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/MovieTab/Family/lego.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>

                    {/* New Movies */}
                    <Text style={styles.moviesTitleStyles}>New Movies</Text>
                    <Grid style={styles.lastMoviesGridStyle}>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,marginLeft: 5,elevation: 20, }}>
                            <Image source={require('../../../assets/images/MovieTab/New/tom_jerry.jpeg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/MovieTab/New/justice_league.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                        <Col style={{ backgroundColor: '#222222', height: 170,marginRight: 10,elevation: 20, }}>
                            <Image source={require('../../../assets/images/MovieTab/New/raya.jpg')} style={{width:'100%',height:'100%',borderRadius: 5}}/>
                        </Col>
                    </Grid>
                </View>
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({

    moviesGridStyle: {
        padding: 5,
        marginTop: 10,
        marginBottom: 25
    },

    lastMoviesGridStyle: {
        padding: 5,
        marginTop: 10,
        marginBottom: 40
    },

    moviesTitleStyles:{
        marginLeft: 10,
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Roboto_medium'
    },
    

})

