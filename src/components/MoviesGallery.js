import React, {useState, useEffect}from 'react';
import { searchActorAndGetId, getMoviesForActor } from '../utils/utils';
import MovieModel from '../data-model/MovieModel';
import Movie from './Movie';

const MoviesGallery = (props) => {
    const { selectedActor } = props;
    const [moviesForActor, SetMoviesForActor] = useState([]);

    const loadData = async () =>  {
        const id = await searchActorAndGetId(`${selectedActor.firstName} ${selectedActor.lastName}`);
        if(id) {
            const movies = await getMoviesForActor(id);
            
            console.log(new MovieModel(movies.data.cast[0].id, movies.data.cast[0].title, movies.data.cast[0].poster_path));
            
            // movies.data.cast.forEach(movie => {
                
            // });
            //movies.data.cast.map(movie => <Movie movie={new MovieModel(movie.title, "", movie.poster_path, "", "")}/>)
        }
    }

    useEffect(() => {             
        if(selectedActor) {
            loadData();
        }        
    }, [selectedActor]);
           
    return (
        <div className="comp-m-gallery">
            {moviesForActor}
        </div>
    )
};

export default MoviesGallery;