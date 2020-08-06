import React, {useState, useEffect}from 'react';
import { searchActorAndGetId, getMoviesForActor } from '../utils/utils';

const MoviesGallery = (props) => {
    const { selectedActor } = props;

    const loadData = async () =>  {
        const id = await searchActorAndGetId(`${selectedActor.firstName} ${selectedActor.lastName}`);
        if(id) {
            const movies = await getMoviesForActor(id);
            console.log(movies.data.cast);
        }
    }

    useEffect(() => {             
        if(selectedActor) {
            loadData();
        }        
    }, [selectedActor]);
           
    return (
        <div className="comp-m-gallery">
            
        </div>
    )
};

export default MoviesGallery;