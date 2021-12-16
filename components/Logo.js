import React from 'react';
import {View,Image,StyleSheet} from 'react-native';


const Logo = props =>{

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source ={require('../assets/logo.png')}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor:'#032541',
        paddingVertical: 15,
       
   
    },
    logo:{
      justifyContent:'center',

    }
})

export default Logo;