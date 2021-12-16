import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

import Logo from '../Logo';
import SearchBar from './SearchBar';

const Header = props =>{

    return(
        <View style={styles.headerContainer}>
            <Logo/>
            <View style ={styles.headerText}>
                <Text style={styles.welcomeText}>Bem-Vindo(a).</Text>
                <Text style={{fontWeight:'bold',fontSize:18,color:'white'}}>
                    Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.
                </Text>
            </View>
            <SearchBar/>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width :'100%',
        backgroundColor:'#034159',
    },

    headerText:{
        paddingTop:'10%',
        paddingLeft:'10%',
        paddingRight:'10%'
    },
    welcomeText:{
        fontSize:28,
        color:'white',
        fontWeight:'bold'
    }
})

export default Header;