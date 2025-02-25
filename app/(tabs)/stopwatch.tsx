import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

const Stopwatch=()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.title} >00:00.00</Text>
            <TouchableOpacity style={styles.lapButton} onPress={() => alert('Hello There:')}>
                <FontAwesome name="stopwatch" size ={20} color = "black" />
                <Text style={{color: 'white', marginLeft: 10, fontWeight: 'bold'}}>Lap</Text>
            </TouchableOpacity>
            <br/>
            <TouchableOpacity style={styles.button} onPress={() => alert('Hello There:')}>
                <FontAwesome name='stopwatch' size ={20} color = "black" />
                <Text style={{color: 'white', marginRight: 10, fontWeight: 'bold',}}>Start</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Stopwatch 

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        
        
            height: '100%',
            width: '100%',
            backgroundColor: 'black',
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        backgroundColor: '#2A2A2A',
        padding: 10,
        borderRadius: 5,

    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '25%',
    },
    lapButton: {
        flexDirection: 'row',
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '25%',
    },

    buttonText: {
        color: 'white',
        marginLeft: 10,
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '25%',
    },
})