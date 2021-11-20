import * as React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  SafeAreaView } from 'react-native';

import Carousel, {ParallaxImage} from 'react-native-snap-carousel';


const { width: screenWidth } = Dimensions.get('window')


export default class App extends React.Component {

    //Carousel Image
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              img: require('../../../assets/images/HorrorTab/Carousel/it.jpg')
          },
          {
              img: require('../../../assets/images/HorrorTab/Carousel/train_busan.png')
          },
          {
              img: require('../../../assets/images/HorrorTab/Carousel/rings.jpg')
          },
          {
              img: require('../../../assets/images/HorrorTab/Carousel/days_later.png')
          },
          {
              img: require('../../../assets/images/HorrorTab/Carousel/bird_box.jpg')
          },
        ]
      }
    }

    _renderItem({item,index}, parallaxProps){
        return (
          <View style={styles.item}>
              <ParallaxImage
                    source={item.img}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                    showSpinner={true}
                    spinnerColor={'red'}
                />
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1}}>
            <View style={{flexDirection:'row', backgroundColor: '#222222' }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={screenWidth}
                  sliderHeight={screenWidth}
                  itemWidth={screenWidth - 45}
                  renderItem={this._renderItem}
                  hasParallaxImages={true} 
                  autoplay={true}
                  enableSnap={true}
                  loop={true}
                  />
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        width: 355,
        height: 250,
      },
      
      imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        borderRadius: 10,
        marginTop: 25
      },
      image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain',
      },
    
})