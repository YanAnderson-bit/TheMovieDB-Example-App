import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

import Synopse from '../components/SynopsisScreenComponents/Synopse';
import Logo from '../components/Logo';
import BackButton from '../components/SynopsisScreenComponents/BackButton';

function SynopseScreen ({route,navigation}){
    
    return (
        <View style={styles.container}>
            <Logo/>
            <BackButton navigation={navigation}/>
            <Synopse 
                movieName={route.params?.movieName}
                overview ={route.params?.overview}
                movieImagePath ={route.params?.movieImagePath}
                backgroundImagePath = {route.params?.backgroundImagePath}
                route = {route.params?.route}
                date = {route.params?.date}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#484033',
        marginTop:30,
    }
})
export default SynopseScreen ;