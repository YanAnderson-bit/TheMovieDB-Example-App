import React from "react";
import {Image,TouchableHighlight,StyleSheet} from 'react-native';


const PosterFilm = props =>{
    return(
        <TouchableHighlight 
            onPress={()=>props.navigation.navigate('Sobre',
                {   
                    overview: props.overview,
                    movieName:props.movieName,
                    backgroundImagePath:props.backgroundImagePath,
                    movieImagePath:props.posterPath,
                    route:props.route,
                    date:props.date
                })}>
            <Image 
                style={styles.posterFilm}
                source={{uri:props.route+props.posterPath}}
            />
        </TouchableHighlight>
    );
}


const styles = StyleSheet.create({
    posterFilm: {
        width:150,
        height:250,
        borderRadius:12,
        
    }
})

export default PosterFilm;