import React from 'react';
import {View,StyleSheet,Text} from 'react-native';


const Overview = props => {
    return (
        <View style={styles.container}>
            <View style={styles.movieNameContainer}>
                <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>
                    {props.movieName}
                </Text>
                <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>
                    {props.date}
                </Text>
            </View>
            <View style={{paddingTop:65,paddingLeft:30}}>
                <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Sinopse</Text>
            </View>
            <View style={{paddingTop:30,paddingLeft:30}}>
                <Text style={{color:'white',fontSize:14}}>{props.overview}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex:1,
        
    },
    movieNameContainer:{
        paddingTop:20,
        alignItems: 'center',
    }
})

export default Overview;