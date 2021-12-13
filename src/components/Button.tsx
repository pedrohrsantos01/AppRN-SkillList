import React from "react";
import { 
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
     } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: String;
}     

export function Button({ title ,...rest } : ButtonProps){
    return(
        <TouchableOpacity 
        style={styles.Button} 
        activeOpacity={0.7}
        {...rest}
        >
            <Text style ={styles.ButtonText}>
                { title }
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