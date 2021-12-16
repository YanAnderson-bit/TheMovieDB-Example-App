import React from 'react';
import {ScrollView} from 'react-native';

import Film from './Film'
const FilmList = props => {
    return (

        <ScrollView>               
            <Film
                url="https://api.themoviedb.org/3/movie/popular?api_key=abc022d9c23c6cae0e393a928c09f01c"
                type="Os mais Populares"
                released="Lançado em"
                navigation={props.navigation}
            />
          
            <Film
                url="https://api.themoviedb.org/3/movie/upcoming?api_key=abc022d9c23c6cae0e393a928c09f01c"
                type="Em breve"
                released="Estréia em"
                navigation={props.navigation}
               
            />
            <Film
                url="https://api.themoviedb.org/3/trending/all/week?api_key=abc022d9c23c6cae0e393a928c09f01c"
                type="Tendências"
                released="Lançado em"
                navigation={props.navigation}
            />
      </ScrollView>
    )
}




export default FilmList;