// src/pages/MovieList.jsx (PALAUTETTU old first VERSIO)

import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
// TUO VAKIOTIEDOSTO SISÄÄN
import { VITE_API_BASE_URL } from '../components/constant.jsx'; 
// TUO OMAT KOMPONENTIT SISÄÄN
import MovieCard from '../components/MovieCard.jsx'; 
import MovieForm from '../components/MovieForm.jsx'; 
import SearchBar from '../components/SearchBar.jsx';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // HAKU-FUNKTIO: TÄRKEÄÄ! Korjattu URL ilman /api
  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // KORJATTU URL: Käytetään vain /getall
      const res = await axios.get(`${VITE_API_BASE_URL}/getall`); 
      setMovies(res.data);
      console.log(res.data)
    } catch (err) {
      console.error('Elokuvien haku epäonnistui:', err);
      setError('Elokuvien lataaminen epäonnistui. Tarkista API-osoite.');
    } finally {
      setLoading(false);
    }
  }, []);

  // KÄYNNISTÄ HAKU KERRAN KOMPONENTIN LATAUDUTESSA
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  
  // ELOKUVIEN SUODATUS
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // RENDERÖINTI
  if (loading) return <div>Ladataan elokuvia...</div>;
  if (error) return <div>Virhe: {error}</div>;

  return (
    <div className="movie-list-container" style={{ padding: '20px' }}>
      <h1>Elokuva-arkisto</h1>
      
      {/* Käytä MovieFormia uuden elokuvan lisäämiseen */}
      <MovieForm onMovieAdded={fetchMovies} /> 
      
      {/* Haku */}
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="movie-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {filteredMovies.map(movie => (
          <MovieCard 
            key={movie._id} 
            movie={movie} 
            onMovieDeleted={fetchMovies} // Päivitä lista poiston jälkeen
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;