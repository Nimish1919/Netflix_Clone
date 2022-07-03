import React,{useState,useEffect} from 'react'
import axios from './axios';
import './Row.css';

export function Row({title,fetchUrl}) {

    const[movies,setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original"

    useEffect(() => {


        async function fetchData(){

            const request = await axios.get(fetchUrl);
            console.log(request.data.results);

            setMovies(request.data.results);
        }
        fetchData();

    }, [fetchUrl]);

    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className="row_posters">
                {movies.map(movie => {
                    return <img
                        className='row_poster'
                        key = {movie.id}
                        src = {`${base_url}${movie.poster_path}`}
                        alt = {movie.name}
                    />
                })}
            </div>
        </div>
    )
}
