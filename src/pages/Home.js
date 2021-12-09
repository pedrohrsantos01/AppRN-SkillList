import React, {useState} from "react";
import { 
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
 } from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";


 export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkill] = useState([]);

    function handleAddNewSkill() {
        setMySkill(oldstate => [...oldstate, newSkill])
    }


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

       <Button Onpress={handleAddNewSkill} />
    
        <Text style={[styles.Text, {marginTop: 30 , fontSize: 30 }]}>
            My Skills
        </Text>

        {
            mySkills.map(skill => (
                <SkillCard key={skill}  skill={skill} />
           ))
        }    
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
 })