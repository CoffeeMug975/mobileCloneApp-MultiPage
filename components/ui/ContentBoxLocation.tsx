import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function ContentBoxLocation(){
    return(
        <View style={styles.grayBox}>
            <View style={styles.spacing}>                
                <View>
                    <Text style={styles.h2}>Location</Text>
                    <Text style={styles.h3}>Local Time Zone</Text>
                </View>
                <View style={styles.middleSection}>
                    <Text style={styles.h1}>5:30</Text>
                    <Text style={styles.h2}> a.m.</Text>
                </View>
                <View>
                    <MaterialCommunityIcons name="weather-sunny" size={24} color="white" />
                    <Text style={styles.h3}>17 C</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    grayBox: {
        height: '30%',
        width: 'auto',
        margin: '1%',
        backgroundColor: 'gray',
        justifyContent: 'center',
        borderRadius: 10,
    },
    spacing: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    middleSection: {
        flexDirection: 'row',
    },
    h1: {
        fontSize: 30,
        color: 'white',
    },
    h2: {
        fontSize: 20,
        color: 'white',
    },

    h3: {
        fontSize: 15,
        color: 'white',
    },
});