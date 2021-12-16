import React from 'react';
import {View,StyleSheet} from 'react-native';

import OverviewImage from './OverviewImage'
import Overview from './Overview'
const Synopse = props => {
    
    return(
        <View style={styles.container}>
           <OverviewImage 
                backgroundImagePath={props.backgroundImagePath}
                route={props.route}
                movieImagePath={props.movieImagePath}
            />
            <Overview 
                movieName={props.movieName}
                overview={props.overview}
                date={props.date}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    
    },
})

export default Synopse;