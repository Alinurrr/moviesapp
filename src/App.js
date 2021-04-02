import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=576875328ed55cf0d015516a1757da9c&page=1";


const SEARCH = "https://api.themoviedb.org/3/search/movie?&api_key=576875328ed55cf0d015516a1757da9c&query=";

function App() {

  const [movies, setMovies] = useState([])
  const [searchTern, setSearchTern] = useState('')

  const getMovies = async () => {
    let res = await axios.get(FEATURED_API)
    setMovies(res.data.results);
    // console.log(res.data.results);
    // setMovies(res.data)
  }



  useEffect(() => {
    document.title = "MovieApp"
    getMovies();
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (searchTern === '') {
        let res = await axios.get(FEATURED_API)
        setMovies(res.data.results);
      } else {
        let res2 = await axios.get(SEARCH + searchTern)
        setMovies(res2.data.results);
      }
      // console.log(movies);
    } catch (error) {
      // console.log(error.message);
    }
  }

  return (
    <div>
      <header>
        <form onChange={submitHandler} onSubmit={submitHandler}>
          <input
            className="search"
            type="search"
            placeholder="search"
            value={searchTern}
            onChange={(e) => setSearchTern(e.target.value)}
          />
        </form>
      </header>
      <div className="App movie-container">
        {
          movies == '' ?
            <h1>Loading bentar</h1> :
            movies.map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))

        }

      </div>
    </div>
  );
}

export default App;
