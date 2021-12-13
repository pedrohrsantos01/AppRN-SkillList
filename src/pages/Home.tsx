import React, {useState , useEffect} from "react";
import { 
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList,
 } from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
    id: String;
    name: String;
} 


 export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkill] = useState<SkillData[]>([]);
    const [greeting, setGreeting] = useState('');



    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkill(oldstate => [...oldstate, data])
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

       if (currentHour < 12) {
            setGreeting('Bom Dia!')
        } else if ( currentHour >= 12 && currentHour <= 18){
            setGreeting('Boa Tarde!')
        } else {
            setGreeting('Boa Noite!')
        }

        console.log(mySkills)
    },[mySkills])

   return(
     <SafeAreaView style={styles.container}>
       <Text style={styles.Text}> Hello, Guys! </Text>
       <Text style={styles.greeting}> {greeting} </Text>

        <TextInput 
        style={styles.input}
        placeholder="Coloque sua Skill"
        placeholderTextColor="#777"
        onChangeText={setNewSkill}
        >
        </TextInput>

       <Button 
       title='Add'
       onPress={handleAddNewSkill}
       />
    
        <Text style={[styles.Text, {marginTop: 30 , fontSize: 30 }]}>
            My Skills
        </Text>

        <FlatList 
            data={mySkills}
            keyExtractor={item => item.id}
            renderItem= {({item}) => (
                <SkillCard skill={item.name} />
            )}
        />
       
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
         marginTop: 30,
     },
     greeting: {
         color: '#FFFFFF',
         fontSize: 20,
         marginLeft: 5,
     }
 })