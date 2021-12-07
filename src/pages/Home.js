import React, {useState} from "react";
import { 
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
 } from "react-native";


 export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, addNewSkill] = useState([]);


   return(
     <SafeAreaView style={styles.container}>
       <Text style={styles.Text}> Hello, Guys! </Text>

        <TextInput 
        style={styles.input}
        placeholder="Coloque sua Skill"
        placeholderTextColor="#777"
        onChangeText={setNewSkill}
        >
        </TextInput>

        <TouchableOpacity 
        style={styles.Button} 
        activeOpacity={0.7}
        >
            <Text style ={styles.ButtonText}>
                Add Skill
            </Text>
        </TouchableOpacity>
    
        <Text style={[styles.Text, {marginTop: 30 , fontSize: 30 }]}>
            My Skills
        </Text>

        <TouchableOpacity 
        style={styles.skill}
        activeOpacity={.6}
        >
        <Text style={styles.skillText}>
            {newSkill}
        </Text>
        </TouchableOpacity>
        
     </SafeAreaView>
    
   )
 }  



 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor:'#121015',
         paddingHorizontal: 10,
         paddingVertical: 20,
     },
     Text: {
        fontWeight: 'bold' , 
        color: 'yellow', 
        fontSize: 40
     },
     input: {
         backgroundColor: '#1F1e25',
         borderRadius: 20,
         color: '#FFFFFF',
         fontSize: 20,
         padding: Platform.OS == 'ios' ? 15 : 10,
         marginTop: 30

     },
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