import React from 'react';
import {View,StyleSheet,Text, TextInput,TouchableHighlight,Keyboard} from 'react-native';


const SearchBar = props =>{

    return(
    <View style={styles.container}>
        <TextInput style={styles.textInput}/>
        <TouchableHighlight onPress={Keyboard.dismiss()} 
            style={styles.buttonSearch}
            underlayColor='#ccc'
        >
        <Text style={{color:'white',fontWeight:'bold'}}>Search</Text>
        </TouchableHighlight>
    </View>
    
    );
}

const styles = StyleSheet.create({
    container:{
        width:'80%',
        backgroundColor:'white',
       
        marginVertical:20,
        borderRadius:20,
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft:'8%',
    },
    textInput: {
        marginLeft:5,
        fontWeight:'bold',
        width:'50%'
        
    },
    buttonSearch:{
        backgroundColor:'#12C7C1',
        justifyContent: 'center',
        alignItems: 'center',
        width:'30%',
        borderRadius:20,
        paddingVertical:8,
        
    }
})

export default SearchBar;