import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import * as firebase from 'firebase';
import 'firebase/firestore';
import HomeScreen from './screens';
import AccountScreen from './screens/account';
import ContinueScreen from './screens/continue';
import DownloadScreen from './screens/download';
import MeScreen from './screens/me';
import SplashScreen from './screens/splash';
import SignupScreen from './screens/signup';
import SigninScreen from './screens/signin';
//Remove To See The warnings
import { LogBox } from 'react-native';

// Ignore all log notifications:
LogBox.ignoreAllLogs();


//Firebase Api Key
//Initialize/Link To Firebase Server
const firebaseConfig = {
  apiKey: "AIzaSyB6eLjal1IpQy_egJ5KRsdFDzLP4VkOwak",
  authDomain: "hotv-67426.firebaseapp.com",
  projectId: "hotv-67426",
  storageBucket: "hotv-67426.appspot.com",
  messagingSenderId: "948276052233",
  appId: "1:948276052233:web:fb345f1d5f150eea8b13d8"
};
//Stops The App From Initilizing Everytime It Is Reloaded
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

//Creates Screen Stack To Navigate Though
const Stack = createStackNavigator();


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      //Set The Timer To False
      timePassed: false,
      //Set Fonts To False
      fontLoaded: true,
      //Set Logged In To False
      isLoggedIn: false,

    };
  }

  async componentDidMount() {
    //Set A Timer For SplashScreen
    setTimeout(() => {
      this.setTimePassed();
    }, 2500);
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }
  
  
  //Fonts Used
  async UNSAFE_componentWillMount() {
    await Font.loadAsync({
    'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'robotoregular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto_bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'robotolight': require('./assets/fonts/Roboto-Bold.ttf'),
  });
  this.setState({ fontLoaded: false });

  //Check If The User Is Logged In
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.setState({ isLoggedIn: true })
    } else {
      this.setState({ isLoggedIn: false })
    }
  })
}



  render() {
  //Checks If Fonts Are Loaded
  if(!this.state.timePassed)
  {
    return(
      //Show SplashScreen
      <SplashScreen />
    )
  }
  else
  {
    return (
      <NavigationContainer>
        {this.state.isLoggedIn ?
        (
          <Stack.Navigator
  
          //Hide Navigation Header
          screenOptions={{
            headerShown: false,
          }}
          //Remove The Flickering White Background When Switching Screens
          detachInactiveScreens={false} screenOptions={{ animationEnabled: false }}
          //Hide The Header
          headerMode={false}
          >

          {/* Navigate To Home Screen */}
          <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
  
          {/* Navigate To Account Screen */}
          <Stack.Screen
              name="Account"
              component={AccountScreen}
            />

          {/* Navigate To Continue Screen */}
          <Stack.Screen
              name="Continue"
              component={ContinueScreen}
            />

          {/* Navigate To Download Screen */}
          <Stack.Screen
              name="Download"
              component={DownloadScreen}
            />

          {/* Navigate To Me Screen */}
          <Stack.Screen
              name="Me"
              component={MeScreen}
            />
  
          </Stack.Navigator>
        ) :
        (
          <Stack.Navigator
  
          //Hide Navigation Header
          screenOptions={{
            headerShown: false,
          }}
          //Remove The Flickering White Background When Switching Screens
          detachInactiveScreens={false} screenOptions={{ animationEnabled: false }}
          //Hide The Header
          headerMode={false}
          >
  
          {/* Navigate To SignIn Screen */}
          <Stack.Screen
              name="Signin"
              component={SigninScreen}
            />

          {/* Navigate To SignUp Screen */}
          <Stack.Screen
              name="Signup"
              component={SignupScreen}
            />

          </Stack.Navigator>
        )
      }
      
      
      </NavigationContainer>
    );
  }
}
}