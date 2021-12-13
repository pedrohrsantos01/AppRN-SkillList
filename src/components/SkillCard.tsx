import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';



export function SkillCard({ skill }){
    return(
        <TouchableOpacity 
                style={styles.skill}
                activeOpacity={.6}
                >
                <Text style={styles.skillText}>
                    {skill}
                </Text>
            </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    skill:{
        backgroundColor: '#1F1E25',
        padding: 20,
        borderRadius: 40,
        marginTop: 25,
        alignItems: 'center',
    },
    skillText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    }
})