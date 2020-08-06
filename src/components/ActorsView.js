import React, { useState } from 'react';
import { Row, Col, Form, Navbar } from 'react-bootstrap';
import Actor from './Actor';

const ActorsView = props => {
    const { actors, onActorSelected } = props;
    const [filter, setFilter] = useState("");
    const [sortingValue, setSortingValue] = useState("none");
    
    const compare = (a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        
        return 0;
      }
    
    const filteredActors = actors.filter(({firstName, lastName}) => (`${firstName.toUpperCase()} ${lastName.toUpperCase()}`).trim().includes(filter.toUpperCase().trim()));
    if(sortingValue !== "" || sortingValue === "none") {
        filteredActors.sort((a, b) => (sortingValue === 'age') ? a.Age() - b.Age() : compare(a[sortingValue], b[sortingValue]));
    }    
    const actorComp = filteredActors.map(actor => <Col key={actor.id} lg={3} md={4} sm={6} className="actor"><Actor actor={actor} onActorSelected={onActorSelected}/></Col>)

    return (
        <div className="actors-view">
            <header>
                <h1>Actors</h1>
            </header>
            <Row id="form-row">                              
                  <Navbar className="w-100">                      
                        <Row className="justify-content-between w-100">
                            <Col lg={10} sm={6}>
                                <Form inline className="w-100">
                                    <Form.Control type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="filter" className="w-100"/>                          
                                </Form>
                            </Col>
                            <Col lg={2} sm={6}>
                                <Form inline className="w-100">
                                    <Form.Control as="select" value={sortingValue} onChange={e => setSortingValue(e.target.value)} >
                                                <option value="none">sort</option>
                                                <option value="firstName">first name</option>
                                                <option value="lastName">last name</option>
                                                <option value="age">age</option>
                                    </Form.Control>  
                                </Form>    
                            </Col>                                        
                        </Row>                                             
                </Navbar>                      
            </Row>
            <Row>
                {actorComp}
            </Row>
        </div>
    );
}


export default ActorsView;