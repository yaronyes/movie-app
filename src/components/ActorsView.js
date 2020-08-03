import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Actor from './Actor';


const ActorsView = props => {
    const { actors } = props;
    const [filter, setFilter] = useState("");
    const [sortingValue, setSortingValue] = useState("");
    
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
    const actorComp = filteredActors.map(actor => <Col key={actor.id} sm><Actor actor={actor}/></Col>)

    return (
        <div className="actors-view">
            <Row>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control type="text" value={filter} onChange={e => setFilter(e.target.value)} />   
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control as="select" value={sortingValue} onChange={e => setSortingValue(e.target.value)}>
                                <option value="none"></option>
                                <option value="firstName">first name</option>
                                <option value="lastName">last name</option>
                                <option value="age">age</option>
                            </Form.Control>                 
                        </Form.Group>                        
                    </Form.Row>                
                </Form>    
            </Row>
            <Row>
                {actorComp}
            </Row>
        </div>
    );
}


export default ActorsView;