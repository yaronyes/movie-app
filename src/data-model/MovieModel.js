import { getMovie, getMovieCredits } from '../utils/utils.js';

class MovieModel {
    constructor(id, name, poster) {
        //name, length, poster, director, mainStars
        this.id = id;
        this.name = name;
        this.length = 0;
        this.poster = `https://image.tmdb.org/t/p/w500${poster}`;
        this.director = "";
        this.mainStars = "";

        //this.populate();
    }

    populate = async () => {                 
        const movie = await getMovie(this.id);        
        this.length = movie.data.runtime;

        const credits = await getMovieCredits(this.id);
        const result = credits.data.crew.find(crew => crew.job && crew.job === 'Director');
        //console.log(result);
        if(result) {
            this.director = result.name;
        }

        const actors = credits.data.cast.filter(cast => cast.character && cast.order < 5);
        this.mainStars = actors.map(actor => actor.name);        
    }
}

export default MovieModel;