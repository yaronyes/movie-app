import React, {useState, useEffect}from 'react';
import { searchActorAndGetId, getMoviesForActor } from '../utils/utils';
import MovieModel from '../data-model/MovieModel';
import Movie from './Movie';
import { Accordion } from 'react-bootstrap';
import './MoviesGallery.css';

// this component draws a list with the all the movies for an actor.
// Props:
// selectedActor - string - the actor full name (e.g: "Jack Nicholson" )
// State:
// list of movies for the actor
const MoviesGallery = (props) => {
    const { selectedActor } = props;
    const [moviesForActor, SetMoviesForActor] = useState([]);

    const loadData = async () =>  {
        const id = await searchActorAndGetId(`${selectedActor.firstName} ${selectedActor.lastName}`);
        if(id) {
            const response = await getMoviesForActor(id);

            const actorMovies = response.data.cast.map((movie, i) => <Movie key={i} movie={new MovieModel(movie.id, movie.title, movie.poster_path)}/>);
            SetMoviesForActor(actorMovies);
        }
    }

    useEffect(() => {             
        if(selectedActor) {
            loadData();
        }        
    }, [selectedActor]);
           
    return (
        <div className="comp-m-gallery">
            <header>
                <h1>Movies</h1>
            </header>
             <Accordion className="test">    
                {moviesForActor}              
             </Accordion>            
        </div>
    )
};

export default MoviesGallery;