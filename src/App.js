import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Cards from './components/Cards';
import CardEdit from './components/CardEdit';
import Navbar from './components/Navbar';

function App() {

  const[movieData, setMoviedata] = useState([]);
  const[movieId, setMovieId] = useState(null);

  useEffect(() => {
    fetch ("https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1")
    .then(response => response.json())
    .then(data => {
       setMoviedata(data.results);
    })

  }, []);

  const handleEdit = (id) => {
    setMovieId(id);
  }

  const handleDone = () => {
    setMovieId(null);

  }
 
  const handleCancel = () => {
    setMovieId(null);
  }


  return (
    <div className="App">
      <Navbar />
     <Banner movieData={movieData} />
     
     <h1 className='text-white text-3xl font-bold p-4 ml-3'>Popular Movies</h1>

     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20 ml-6'>
     {
          movieData.map((movies, index) => (
            <>
            { movieId === movies.id ? <CardEdit  movies={movies} handleDone={handleDone} handleCancel={handleCancel} /> : <Cards movies={movies} handleEdit={handleEdit} />  }
          
            </>
          ))
      }
    </div>
    </div>
  );
}

export default App;
