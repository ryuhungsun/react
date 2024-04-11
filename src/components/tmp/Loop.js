import React, {useState} from "react";
import { ReactDOM } from "react";
import Movie from "./Movie";
import '../index.css';
const Loop = (pros) =>{
    const [movieTile, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const movies= [
        {id:1, title: '파묘', year:2024},
        {id:2, title: '택시 운전사', year:2022},
        {id:3, title: '서울의 봄', year:2020}, 
        {id:4, title: '태극기 휘날리며', year:2020}, 
    ];

    const renderMovies = movies.map(
        movie =>{
            return(
                // <div className="movie"key={movie.title}> 
                //     <div className="movie-title">{movie.title}</div>
                //     <div className="movie-year">{movie.year }</div>
                // </div> 
                    <Movie movie1={movie} key={movie.id} /> 
            );
            console.log({movie});
        }
    );

    return(
        <div>
        <div>반복문(Loop.js) Form</div>
        
        <form >
            <input type="text" placeholder="영화제목" value={movieTile} onChange={e=> setMovieTitle(e.target.value)}/>
            <input type="text" placeholder="개봉년도" value={movieYear} onChange={e=> setMovieYear(e.target.value)}/>
            <br/>
            <button>영화 추가</button> 
        </form>
            {renderMovies }
        </div>
    );
}

export default Loop