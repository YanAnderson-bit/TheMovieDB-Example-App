import React,{ useState,useEffect }from 'react';
import {View,StyleSheet,FlatList,Text} from 'react-native';
import PosterFilm from './PosterFilm'


const Film = props => {
    const [isLoading,setLoading] = useState(true)
    const [movies, setMovies]  = useState([])

    const getMovies = async () =>{
        try{
            const request = await fetch(props.url);
            const dataMovies = await request.json();
            setMovies(dataMovies.results)

        }catch(err){
            console.log(err)
        }finally{
            setLoading(false);
        }
    }
 
    useEffect(()=>{
        getMovies()
    },[])


    return(
        <View style={styles.container}>
            <View style={{marginBottom:20,marginLeft:10}}>
                <Text style={{fontSize:24,fontWeight:'bold'}}>
                    {props.type}
                </Text>
            </View>
            <FlatList
                data = {movies}
                horizontal={true}
                keyExtractor={item=>item.id}
                renderItem={({item})=>(    
                    <View  style={styles.filmContainer}>             
                            <PosterFilm
                                navigation = {props.navigation}
                                route='https://image.tmdb.org/t/p/w500'
                                posterPath={item.poster_path}
                                overview = {item.overview}
                                movieName={item.title}
                                backgroundImagePath={item.backdrop_path}
                                date ={item.release_date}
                            />
                            <View style={styles.filmTitle}>
                                <Text style={{fontSize:16,fontWeight:'bold'}}>{item.title}</Text>
                            </View>

                            <View style={styles.ratingContainer}>
                                <Text style={{color:'white',fontWeight:'bold'}}>
                                    {item.vote_average*10}
                                </Text>
                            </View>

                            <View>
                                <Text style={{color:'grey'}}>
                                    {item.release_date}
                                </Text>
                            </View>
                    </View>            
                )}
            
            />        
        </View>
    )
}

const styles = StyleSheet.create({
   
    posterFilm: {
        width:150,
        height:250,
        borderRadius:12,
        
    }

    ,
    filmContainer: {
       
        marginLeft:10,
        alignItems: 'center',
        marginBottom:10
        
    },

    filmTitle: {
        marginTop:10,
        width:150,
        alignItems: 'center'
    },
    ratingContainer: {
        position: 'absolute',
        padding:5,
        backgroundColor:'#034159',
        borderColor:'green',
        borderWidth:3,
        borderRadius:18,
        top:220,
        right:120,
    }
})

export default Film;