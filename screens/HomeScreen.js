import React from 'react';
import {ScrollView, StyleSheet,SafeAreaView,View} from 'react-native';

import Header from '../components/HomeScreenComponents/Header'
import FilmList from '../components/HomeScreenComponents/FilmList'


function HomeScreen ({navigation}) { 
    return(
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <Header/>
            <View style={{marginTop:20,flex:1}}>
                <FilmList navigation={navigation}/>
            </View>
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:30
      },
})
export default HomeScreen;