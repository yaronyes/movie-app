import React, { useState } from 'react';
import { Row, Col, Form, Navbar } from 'react-bootstrap';
import Actor from './Actor';


const ActorsView = props => {
    const { actors } = props;
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
    
    const filteredActors = actors.filter(actor => (`${actor.firstName.toUpperCase()} ${actor.lastName.toUpperCase()}`).includes(filter.toUpperCase()));
    if(sortingValue !== "" || sortingValue === "none") {
        filteredActors.sort((a, b) => (sortingValue === 'age') ? a.Age() - b.Age() : compare(a[sortingValue], b[sortingValue]));
    }    
    const actorComp = filteredActors.map(actor => <Col key={actor.id} sm={4} className="actor"><Actor actor={actor}/></Col>)

    return (
        <div className="actors-view">
            <Row id="form-row">                              
                  <Navbar className="w-100">                      
                        <Row className="justify-content-between w-100">
                            <Col>
                                <Form inline className="w-100">
                                    <Form.Control type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="filter" className="w-100"/>                          
                                </Form>
                            </Col>
                            <Col>
                                <Form inline className="w-100">
                                    <Form.Control as="select" value={sortingValue} onChange={e => setSortingValue(e.target.value)} className="ml-auto">
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