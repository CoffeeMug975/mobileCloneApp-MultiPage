import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import ContentBoxAlarm from '@/components/ui/ContentBoxAlarm';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// Home is the alarm screen
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      {/* This is the top section of the alarm screen */}
      <View style={styles.topLargeContainer}>
        <Text style={styles.titleText}>All alarms are off</Text>
      </View>


      {/* This section is for the add & edit bar */}
      <View style={styles.addAndEditBar}>
        <AntDesign name="plus" size={30} color="white" />
        <Entypo name="dots-three-vertical" size={30} color="white" />
      </View>


      {/* This is where the alarms will be stored */}
      <View style={styles.alarms}>
        <ContentBoxAlarm/>
        <ContentBoxAlarm/>
        <ContentBoxAlarm/>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'black'
  },
  titleText: {
    fontSize: 40,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    color: 'white',
  },
  topLargeContainer: {
    backgroundColor: 'black',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
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
  alarms: {
    height: '45%',
    backgroundColor: 'black',
    padding: '1%',

  },

});
