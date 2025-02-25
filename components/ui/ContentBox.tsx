import {View, StyleSheet, Text} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function ContentBoxAlarm(){
    return(
        <View style={styles.grayBox}>
            <View style={styles.textBox}>
                <View style={styles.container}>
                    <Text style={styles.textSectionOne}>6:00</Text>
                    <Text style={styles.textSectionTwo}> a.m.</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textSectionTwo}>Tues, Feb 25</Text>
                    <MaterialCommunityIcons name="toggle-switch-off" size={40} color="black" />
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
    textBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5%',
    },
    container: {
        flexDirection: 'row',
    },
    textSectionOne: {
        fontSize: 30,
    },
    textSectionTwo: {
        fontSize: 20,
    }
});