import logo from './logo.svg';
import './App.css';
import requests from './requests';
import { Row } from './Row';
import {Banner} from './Banner'

function App() {
  return (
    <div className="app">
      <Banner/>
      <Row title = "Trending" fetchUrl = {requests.fetchTrending}/>
      <Row title = "Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals}/>
      <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title = "Romace Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title = "Documentary Movies" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
