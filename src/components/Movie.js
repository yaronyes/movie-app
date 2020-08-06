import React, {useState, useEffect}from 'react';
import { Card, Accordion, Col, Row, ListGroup } from 'react-bootstrap';
import './Movie.css';

const Movie = (props) => {
    const { movie } = props;
    //const [director, setDirector] = useState("");
    const [extraData, setExtraData] = useState({
        director: "",
        mainStars: [],
        length: 0
    });

    const getMovieData = async () => {
        await movie.populate();

        //setDirector(movie.director);
        setExtraData({
            director: movie.director,
            mainStars: movie.mainStars,
            length: movie.length
        })
    }

    return (
        <div className="comp-movie">            
            <Card onClick={getMovieData}>
                <Accordion.Toggle as={Card.Header} eventKey={movie.id}>
                {movie.name}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={movie.id}>
                    <Row className="acc-row">
                    {/* <div> */}
                        <Col className="acc-col" md={3}>
                            <Card.Img src={movie.poster} className="w-100"/>
                        </Col>      
                        <Col className="acc-col" md={9}>                                                
                            <ListGroup>
                                <ListGroup.Item>Director: {extraData.director}</ListGroup.Item>
                                <ListGroup.Item>Main Stars: {extraData.mainStars.join(", ")}</ListGroup.Item>
                                <ListGroup.Item>Length: {extraData.length}</ListGroup.Item>
                            </ListGroup>                                  
                        </Col>      
                        {/* <Card.Body>{director}</Card.Body> */}
                    </Row>                    
                    {/* </div> */}
                </Accordion.Collapse>
            </Card>
        </div>
    )
};

export default Movie;