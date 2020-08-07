import { getMovie, getMovieCredits, getPerson } from '../utils/utils.js';

// class MovieModel represents a movie. the constructor receiving only three parameters.
// the rest of the parameters gained when calling the populate method
class MovieModel {
    constructor(id, name, poster) {
        this.id = id;
        this.name = name;
        this.length = 0;
        this.poster = `https://image.tmdb.org/t/p/w500${poster}`;
        this.director = { name: "", imdb_id: "" };
        this.mainStars = [];
    }

    populate = async () => {
        try {
            // getting the movie length
            const movie = await getMovie(this.id);        
            this.length = movie.data.runtime;

            // getting the movie credits in order to get the director and the main stars 
            const credits = await getMovieCredits(this.id);
            const result = credits.data.crew.find(crew => crew.job && crew.job === 'Director');
            this.director.name = result.name;
            
            // getting the director imdb id
            const directorData = await getPerson(result.id);
            this.director.imdb_id = directorData.data.imdb_id;
            
            const actors = credits.data.cast.filter(cast => cast.character && cast.order < 5);
            this.mainStars = actors.map(actor => ({ name: actor.name, imdb_id: "" }));        
            
            // getting the imdb id for each actor
            for(let i = 0; i < actors.length; i++) {
                const actorData = (await getPerson(actors[i].id)).data;
                this.mainStars[i].imdb_id = actorData.imdb_id;                
            }
        } catch (e) {
            console.log(e.message)
        }                 
        
    }
}

export default MovieModel;