import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export default function WorldClock() {
  return (
    <View style={styles.container}>
      
      {/* Top title section */}
      <View  style={styles.topSection}>

        {/* Upper line of top section */}
        <View style={styles.topLine}>
          <Text style={styles.h1}>2:30:51 </Text>
          <Text style={styles.h3}>p.m.</Text>
        </View>
        
        {/* Lower line of top section */}
        <View>
          <Text style={styles.h3}>Mountain Standard Time</Text>
        </View>

      </View>

      {/* This section is for the add & edit bar */}
      <View style={styles.addAndEditBar}>
        <AntDesign name="plus" size={30} color="white" />
        <Entypo name="dots-three-vertical" size={30} color="white" />
      </View>

      {/* Different Time zones and weather */}
      <View>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: 'auto',
    backgroundColor: 'white', 
  },

  topSection: {
    height: '30%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },

  topLine: {
    flexDirection: 'row',
  },

  h1: {
    fontSize: 40,
    color: 'white',
  },

  h2: {
    fontSize: 30,
    color: 'white',
  },
  
  h3: {
    fontSize: 20,
    color: 'white',
  },

  addAndEditBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'black',
    margin: 0,
    padding: 0,
    height: '5%',
  },
  
});
