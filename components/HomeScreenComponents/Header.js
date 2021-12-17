import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

import Logo from '../Logo';
import SearchBar from './SearchBar';
import {HeaderContainer} from '../../styles/HeaderContainer'



function  Header() {

    const orientation = useOrientation();

   
    return(
            <HeaderContainer>
                <Logo/>
                <View style ={styles.headerText}>
                    <Text style={styles.welcomeText}>Bem-Vindo(a).</Text>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'white'}}>
                        Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.
                    </Text>
                </View>
                <SearchBar/>
            </HeaderContainer>
        )
        
}

const styles = StyleSheet.create({

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