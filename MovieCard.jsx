// src/components/MovieCard.jsx

import { Link } from 'react-router-dom';

function MovieCard({ movie, onDelete }) {
  // Oletetaan, että elokuvan ID on tallennettu kenttään _id
  const movieId = movie._id; 

  return (
    <div className="col-sm-6 col-md-4 mb-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text text-muted">Genre: {movie.genre || 'N/A'}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          
          {/* Linkki vie nyt MovieDetails-sivulle elokuvan ID:llä.
              Sieltä käyttäjä voi katsella, muokata tai poistaa. */}
          <Link to={`/movies/${movieId}`} className="btn btn-sm btn-info">
            Näytä Tiedot
          </Link>
          
          {/* Poistonappi käyttää ylhäältä periytyvää funktiota (MovieList.jsx:stä) */}
          <button 
            className="btn btn-sm btn-danger" 
            onClick={() => onDelete(movieId)}
          >
            Poista
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;