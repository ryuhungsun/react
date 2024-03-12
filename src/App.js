import React,{useState} from "react";
import Movie from './components/Movie'
import MovieForm from "./components/MovieForm";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from 'react-router-dom';

function App(){
  const [movieTile, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');

  const [movies, setMovies] = useState([
  ]);

  const removeMovie1 = (id) =>{ 
    setMovies(movies.filter(movie => {
      return movie.id != id;
    }))
  };
  const renderMovies = movies.length ? movies.map( movie=>{
    return (
      <Movie movie={movie}  key={movie.id} removeMovie={removeMovie1} />
      // <div className="movie" key={movie.year}>
      //   <div className="movie-title">{movie.title}</div>
      //   <div className="movie-year">{movie.year}</div>
      // </div> 
    
    ) 
  }) : '추가된 영화가 없습니다.';
  const removeMoview=(id) =>{
    setMovies(movies.filter(movie=>{
      return movie.id != id;
    }))
  }
  const addMovie = (movie) =>{
    // event.preventDefault();
    // console.log(movieTile, movieYear);
    setMovies([...movies,
      // {
      // title : movieTile,
      // year : movieYear
      // }
      movie
    ]);
    // setMovieTitle('');
    // setMovieYear('');
  };
  return(
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
        <Routes>
          <Route path="/movies" element={ 
            <>
             <MovieForm addMovie={addMovie}/>
             {renderMovies}
            </>
          }></Route>
          <Route path="/users" element={
            <Users/>
          }></Route>
          <Route path="/" element={
            <h1>Home</h1>
          }></Route> 
        </Routes>
        </div>
        {/* <h1>Movie List</h1>
        <MovieForm addMovie={addMovie}/>
        {renderMovies} */}
      </div>
    </Router>
  )
}

export default App;