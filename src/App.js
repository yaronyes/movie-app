import React, {useState, useEffect}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import ActorModel from './data-model/ActorModel';
import ActorsView from './components/ActorsView';
import {loadActors} from './utils/utils';
import MoviesGallery from './components/MoviesGallery'

function App() {
  const [actors, setActors] = useState([]);
  const [selectedActor, setSelectedActor] = useState();
  
  const loadData = async () =>  {
    const response = await loadActors("actors.json");
    setActors(response.data.map(actor => new ActorModel({ ...actor })));
  }
  
  useEffect(() => {     
    loadData();
  }, []);
   
  return (
    <Container>
      <ActorsView actors={actors} onActorSelected={(actor) => setSelectedActor(actor)}/>
      <MoviesGallery selectedActor={selectedActor}/>
    </Container>
  );
}

export default App;
