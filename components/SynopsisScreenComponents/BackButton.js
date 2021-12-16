import React from 'react';
import {View,StyleSheet,TouchableHighlight,Image} from 'react-native';



const BackButton = (props) => {
    return(
      
            <View style={styles.button}>
                <TouchableHighlight onPress={()=>props.navigation.navigate('Home')}>
                    <Image 
                        source = {require('../../assets/botao-voltar.png')}
                        style={{width:40}}
                    />
                </TouchableHighlight>
            </View>
       
    )
}


const styles = StyleSheet.create({
    button: {
       width:40,
       position: 'absolute',
       top:10
    }
})

export default BackButton;