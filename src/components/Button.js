import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button({ Onpress }){
    return(
        <TouchableOpacity 
        style={styles.Button} 
        activeOpacity={0.7}
        onPress={Onpress}
        >
            <Text style ={styles.ButtonText}>
                Add Skill
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    Button: {
        backgroundColor:'#943',
        padding: 15,
        marginTop: 15,
        borderRadius: 30
    },
    ButtonText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})