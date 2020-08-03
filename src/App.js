import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import ActorModel from './data-model/ActorModel';
import ActorsView from './components/ActorsView';


function App() {
  const actors = [];
  actors.push(new ActorModel(1, "Jack", "Nicholson", "1937-04-22", "https://m.media-amazon.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_.jpg", "https://www.imdb.com/name/nm0000197"));
  actors.push(new ActorModel(2, "Robert", "De Niro", "1943-08-17", "https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_.jpg", "https://www.imdb.com/name/nm0000134"));
  actors.push(new ActorModel(3, "Al", "Pacino", "1940-04-25", "https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_.jpg", "https://www.imdb.com/name/nm0000199"));

  return (
    <Container>
      <ActorsView actors={actors}/>
    </Container>
  );
}

export default App;
