import React from 'react';
import { Card } from 'react-bootstrap';

// This component draws card with image, name and age of an actor
// Props:
// actor - ActorModel object - (e.g new ActorModel(1, "Jack", "Nicholson", "1937-04-22", "https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_.jpg", "https://www.imdb.com/name/nm0000197"))
const Actor = props => {
    const { actor } = props;

    return (
        <Card className="h-100">
            <Card.Img className="img-fluid" variant="top" src={actor.imageUrl}/>
            <Card.Body>            
            <a href={actor.imdbLink} target="_blank" rel="noopener noreferrer"><Card.Title>{`${actor.firstName} ${actor.lastName}`}</Card.Title></a>
                <Card.Text className="h-25">
                Age: {actor.Age()}
                </Card.Text>
            </Card.Body>           
        </Card>
    );
}


export default Actor;