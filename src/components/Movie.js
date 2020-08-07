import React, {useState, useEffect}from 'react';
import { Card, Accordion, Col, Row, ListGroup } from 'react-bootstrap';
import './Movie.css';

// This component draws Accordion with movie details
// Props:
// movie - MovieModel class
// State:
// extraData - object with extras movie data to gain upon opening the accordion
// cursor - changing the cursor when fetching data
const Movie = (props) => {
    const { movie } = props;    
    const [extraData, setExtraData] = useState({
        director: "",
        mainStars: [],
        length: 0
    });
    const [cursor, setCursor] = useState("pointer-cursor")

    // populate the movie with extra data upon opening the accordion
    const getMovieData = async () => {        
        if(!extraData.director) {
            setCursor("wait-curser");
        
            await movie.populate();
    
            setExtraData({
                director:  <a href={`https://www.imdb.com/name/${movie.director.imdb_id}`} rel="noopener noreferrer" target="_blank">{movie.director.name}</a>,
                mainStars: movie.mainStars.map((actor, i) => <span key={i}><a href={`https://www.imdb.com/name/${actor.imdb_id}`} rel="noopener noreferrer" target="_blank">{actor.name}</a>, </span>),
                length: movie.length
            });
    
            setCursor("pointer-cursor");
        }
    }

    return (
        <div className="comp-movie">            
            <Card onClick={getMovieData} className={cursor}>
                <Accordion.Toggle as={Card.Header} eventKey={movie.id}>
                {movie.name}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={movie.id}>
                    <Row className="acc-row">
                        <Col className="acc-col" md={3}>
                            <Card.Img src={movie.poster} className="w-100"/>
                        </Col>      
                        <Col className="acc-col" md={9}>                                                
                            <ListGroup>
                                <ListGroup.Item><span className="l-title">Director: </span>{extraData.director}</ListGroup.Item>
                                <ListGroup.Item><span className="l-title">Main Stars: </span>{extraData.mainStars}</ListGroup.Item>
                                <ListGroup.Item><span className="l-title">Length: </span>{extraData.length} minutes</ListGroup.Item>
                            </ListGroup>                                  
                        </Col>      
                    </Row>                                    
                </Accordion.Collapse>
            </Card>
        </div>
    )
};

export default Movie;