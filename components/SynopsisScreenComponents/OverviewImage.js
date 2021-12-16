import React from 'react';
import {View,StyleSheet,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const OverviewImage = props =>{
    return(
        <View>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
                <Image 
                    style={{width:'100%',height:250,}}
                    source = {{uri:props.route+props.backgroundImagePath}}
                />
            </LinearGradient>
                <View>
                    <Image  
                        style={styles.movieImage}
                        source = {{uri:props.route+props.movieImagePath}} 
                    />
                </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    movieImage:{
        width: 100,
        height: 150,
        position: 'absolute',
        bottom:5,
        borderRadius:18,
        

    }
})
export default OverviewImage;