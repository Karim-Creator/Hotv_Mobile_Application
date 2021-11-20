import { Button, Container, Icon } from 'native-base';
import React from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';


//Card Data
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Rick And Morty',
    img: require('../../../assets/images/TvShowsTab/Carousel/rick_morty.jpg'),
    episode: 'Season 2 Episode 2',
    description: 'The second season of an American animated science fiction comedy: It revolves around Rick Sanchez an alcoholic talented scientist and his daughter Beth a veterinarian. He spends all his time on crazy experiments and his grandson Morty.',
    genre: 'Animation, Adventure, Comedy',
    actors: 'Justin Roiland, Chris Parnell, Spencer Grammer',
    director: 'Dan Harmon, Justin Roiland',
    country: 'United States'
  },

  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'The Walking Dead',
    img: require('../../../assets/images/TvShowsTab/Carousel/walking_dead.jpg'),
    episode: 'Season 8 Episode 6',
    description: 'After an apocalypse that turns almost the entire population into zombies, a group of men and women led by Officer Rick Grimes are trying to survive. Together, they will have to face this new world as best they can.',
    genre: 'Action, Thriller, Drama, Horror',
    actors: 'Andrew Lincoln, Norman Reedus, Melissa McBride',
    director: 'Frank Darabont',
    country: 'United States'
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Game Of Thrones',
    img: require('../../../assets/images/TvShowsTab/Carousel/got.jpg'),
    episode: 'Season 8 Episode 4',
    description: 'With the Night King finally breaching the Wall alongside a full-grown dragon under his command, the new alliances and betrayals will determine the fate of everyone in Westeros.',
    genre: 'Action, Adventure, Sci-Fi, Drama, Fantasy',
    actors: 'Liam Cunningham, Joe Dempsie, Emilia Clarke, John Bradley, Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Kit Harington, Sophie Turner, Maisie Williams',
    director: 'David Benioff, D B Weiss',
    country: 'United States'
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Queen gambit',
    img: require('../../../assets/images/TvShowsTab/Carousel/queen_gambit.png'),
    episode: 'Season 1 Episode 7',
    description: 'In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.',
    genre: 'Drama',
    actors: 'Anya Taylor-Joy, Bill Camp, Marielle Heller',
    director: 'Scott Frank, Allan Scott',
    country: 'United States'
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ContinueCard = () => {
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
            <View>

            {/* Image Section */}
            <Image 
              source={item.img} // Use item to set the image source
              key={index} // Important to set a key for list items
              style={{
                width:'100%',
                height:225,
                resizeMode:'contain',
              }}
            />

            {/* Background View With Play Icon */}
            <View style={styles.behindViewStyles}>
              <Icon name='play-circle-outline' style={{color: '#fff',fontSize: 55}} />
            </View>

            {/* Description Section */}
            <View style={styles.descriptionViewStyles}>
                <Text style={styles.title}>{item.title}</Text>
                <Button disabled bordered style={{borderColor: '#838383',borderRadius: 10,borderWidth: 10,padding: 10}}><Text style={{color:'#fff',fontSize: 15}}>{item.episode}</Text></Button>
             </View>

            {/* Tags Section */}
            <View style={{paddingLeft: 15,paddingRight: 15, marginTop: 10,marginBottom: 20}}>
                 <Text style={{color: '#d3d3d3'}}>
                 {item.description}
                 </Text>
                 <Text style={{color: '#d3d3d3',marginTop: 5}}>
                 Genre: <Text style={{color:'#E50914'}}>{item.genre}</Text>
                 </Text>
                 <Text style={{color: '#d3d3d3',marginTop: 5}}>
                 Actors: <Text style={{color:'#E50914'}}>{item.actors}</Text>
                 </Text>
                 <Text style={{color: '#d3d3d3',marginTop: 5}}>
                 Directors: <Text style={{color:'#E50914'}}>{item.director}</Text>
                 </Text>
                 <Text style={{color: '#d3d3d3',marginTop: 5}}>
                 Country: <Text style={{color:'#E50914'}}>{item.country}</Text>
                 </Text>
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
    flex: 1,
    backgroundColor: '#323230',
  },

  behindViewStyles: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    height: 225,
    width:'100%',
    backgroundColor: 'rgba(0,0,0,0.3)', //Opacity
  },

  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Roboto_medium',
    paddingTop: 5

  },

  descriptionViewStyles: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingLeft: 20,
      height: 50,
      backgroundColor: '#323230',
      marginRight: 20,
      marginTop: 10,
  }
});

export default ContinueCard;