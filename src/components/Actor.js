import React from 'react';
import { Card } from 'react-bootstrap';


const Actor = props => {
    const { actor } = props;

    return (
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={actor.imageUrl} />
            <Card.Body>            
            <a href={actor.imdbLink} target="_blank" rel="noappear noreferrer"><Card.Title>{`${actor.firstName} ${actor.lastName}`}</Card.Title></a>
                <Card.Text>
                Age: {actor.Age()}
                </Card.Text>
            </Card.Body>           
        </Card>
    );
}


export default Actor;