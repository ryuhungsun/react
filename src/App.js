import React,{useState} from "react";
import Navbar from "./components/Navbar";
import routes from "./routes";
import{
  BrowserRouter as Router,
  Switch,//eslint-disable-line no-unused-vars
  Route,
  Routes
} from 'react-router-dom';

function App(){
  const [movieTile, setMovieTitle] = useState('');//eslint-disable-line no-unused-vars
  const [movieYear, setMovieYear] = useState('');//eslint-disable-line no-unused-vars

  const [movies, setMovies] = useState([
  ]);

  
  const removeMoview=(id) =>{//eslint-disable-line no-unused-vars
    setMovies(movies.filter(movie=>{
      return movie.id !== id;
    }))
  }
  
  return(
    <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
        <Routes>
          {routes.map(route =>{
            return (
              <Route path={route.path} element={ 
                <route.component/>
              } exact></Route>
            )
          })}
          {/* <Route path="/movies" element={ 
            <>
             <MovieForm addMovie={addMovie}/>
             {renderMovies}
            </>
          } exact></Route>
          <Route path="/users" element={
            <Users/>
          } exact></Route>
          <Route path="/" element={
            <Home/>
          } exact></Route>  */}
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