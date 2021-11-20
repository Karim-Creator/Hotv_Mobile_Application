import { Button, Container, Icon, } from 'native-base';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';


//Card Data
const DATA = [
  {
    id: 'd1',
    title: 'Queen Gambit',
    img: require('../../assets/images/TvShowsTab/New/queen_gambit.jpg'),
    episode: 'Season 1 Episode 4',
    genre: 'Drama',
    actors: 'Anya Taylor-Joy, Bill Camp, Marielle Heller, Harry Melling.',
    size : '719 MB',
    quality: '1080p 60FPS',
  },

  {
    id: 'd2',
    title: 'CastleVania',
    img: require('../../assets/images/TvShowsTab/Animated/castlevania.jpg'),
    episode: 'Season 3 Episode 7',
    genre: 'Action, Animated, Adventure, Horror',
    actors: 'Richard Armitage, James Callis, Alejandra Reynoso,Theo James.',
    size : '304.1 MB',
    quality: '1080p 60FPS',
  },

  {
    id: 'd3',
    title: 'Lucifer',
    img: require('../../assets/images/TvShowsTab/Netflix/lucifer.jpg'),
    episode: 'Season 4 Episode 9',
    genre: 'Action, Fantasy, Crime, Drama',
    actors: 'Tom Ellis, Lauren German, Kevin Alejandro, Aimee Garcia',
    size : '924.4 MB',
    quality: '1080p 60FPS',
  },

  {
    id: 'd4',
    title: 'La Casa De Papel',
    img: require('../../assets/images/TvShowsTab/Netflix/casa_de_papel.jpg'),
    episode: 'Season 2 Episode 6',
    genre: 'Actio, Drama, Crime, Mystery',
    actors: 'Úrsula Corberó, Álvaro Morte, Itziar Ituño, Pedro Alonso, Alba Flores',
    size : '975.9 MB',
    quality: '1080p 60FPS',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const DownloadCard = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <Container style={styles.container}>          
        
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        renderItem={ ({ item, index }) => {
            return(
            <View style={{marginTop: 5,backgroundColor:'#141313',padding: 10, borderRadius: 5}}>
            
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>

            {/* Image Section */}
            <Image 
              source={item.img} // Use item to set the image source
              key={index} // Important to set a key for list items
              style={{
                width: 110,
                height:150,
                resizeMode:'contain',
                borderRadius: 5,
              }}
            />

            {/* Description Section */}
            <View style={{flexDirection: 'column',paddingLeft: 5}}>
                    
                <Text style={styles.title}>{item.title}</Text>

                <View style={{flexDirection: 'row',marginTop: 10}}>
                    <Button disabled bordered style={{borderColor: '#838383',borderRadius: 10,borderWidth: 10,padding: 5,marginRight: 10}}><Text style={{color:'#fff',fontSize: 10}}>{item.episode}</Text></Button>
                    <Button disabled bordered style={{borderColor: '#838383',borderRadius: 10,borderWidth: 10,padding: 5,marginRight: 10}}><Text style={{color:'#fff',fontSize: 10}}>{item.size}</Text></Button>
                    <Button disabled bordered style={{borderColor: '#838383',borderRadius: 10,borderWidth: 10,padding: 5,marginRight: 10}}><Text style={{color:'#fff',fontSize: 10}}>{item.quality}</Text></Button>
                    </View>
                <View style={{width: '85%'}}>
                    <Text style={styles.descriptionTextStyles}>
                        Genre: <Text style={{color:'#E50914'}}>{item.genre}</Text>
                    </Text>
                    <Text style={styles.descriptionTextStyles}>
                        Actors: <Text style={{color:'#E50914'}}>{item.actors}</Text>
                    </Text>
                    <Text style={{color:'#008000',marginTop: 5}}>
                        Downloaded
                        <Icon name='checkmark' style={{color: '#008000',fontSize: 15}}/>
                    </Text>
                </View>
                    
                </View>
            </View>

            </View>
            )
          }}
      />
      
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#323230',
  },

  title: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Roboto_medium',
    paddingTop: 5,

  },

  descriptionViewStyles: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingLeft: 20,
      height: 50,
      backgroundColor: '#323230',
      marginRight: 20,
      marginTop: 10,
  },

  descriptionTextStyles:{
    color: '#d3d3d3',
    marginTop: 5,
    fontSize: 12,
  }
});

export default DownloadCard;