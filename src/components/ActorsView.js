import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
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

    const filteredActors = actors.filter(actor => actor.firstName.toUpperCase().includes(filter.toUpperCase()) || actor.lastName.toUpperCase().includes(filter.toUpperCase()));
    if(sortingValue !== "" || sortingValue === "none") {
        filteredActors.sort((a, b) => (sortingValue === 'age') ? a.Age() - b.Age() : compare(a[sortingValue], b[sortingValue]));
    }    
    const actorComp = filteredActors.map(actor => <Col key={actor.id} sm={4} className="actor"><Actor actor={actor}/></Col>)

    return (
        <div className="actors-view">
            <Row id="form-row">               
                <Col sm>
                    <Form>
                        <Row>
                            <Col md={4}>
                                <Form.Control type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="filter"/>                          
                            </Col>
                            <Col md={2}>
                                <Form.Control as="select" value={sortingValue} onChange={e => setSortingValue(e.target.value)}>
                                    <option value="none">sort</option>
                                    <option value="firstName">first name</option>
                                    <option value="lastName">last name</option>
                                    <option value="age">age</option>
                                </Form.Control>    
                            </Col>                                        
                        </Row>                
                    </Form>
                </Col>                     
            </Row>
            <Row>
                {actorComp}
            </Row>
        </div>
    );
}


export default ActorsView;