// src/pages/MovieDetails.jsx

import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MovieForm from "../components/MovieForm"; // UUSI: Tuo lomake
import { VITE_API_BASE_URL } from "../components/constant";
  //const API_URL = import.meta.env.VITE_API_BASE_URL;   


function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false); // UUSI: Muokkaustilan hallinta

  // 1. Tietojen haku (GET)
  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        // HUOM: Tarkista API-reitti! Oletetaan, että se on /api/ + ID
        const res = await axios.get(`${VITE_API_BASE_U}/{id}`);
        setMovie(res.data);
        setError("");
      } catch (err) {
        setError("Failed to load movie details");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  // 2. Päivitys (PUT/PATCH)
  const handleUpdate = async (updatedMovie) => {
    try {
      // HUOM: Tarkista API-reitti! Oletetaan /api/update/ + ID
      const res = await axios.put(`${API_URL}/update/${id}`, updatedMovie);
      
      // Päivitä paikallinen tila ja poistu muokkaustilasta
      setMovie(res.data); // Oletetaan, että API palauttaa päivitetyn resurssin
      setIsEditing(false); 
      setError("");
    } catch (err) {
      setError("Failed to update movie");
    }
  };

  // 3. Poisto (DELETE)
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      try {
        await axios.delete(`${API_URL}/delete/${id}`);
        navigate("/"); // Palaa listanäkymään
      } catch (err) {
        setError("Failed to delete movie");
      }
    }
  };

  // --- EHDOTON RENDERÖINTI ---

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="spinner-border"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">{error}</div>
        <Link to="/" className="btn btn-primary">Back to List</Link>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning">Movie not found</div>
        <Link to="/" className="btn btn-primary">Back to List</Link>
      </div>
    );
  }

  // UUSI: Jos isEditing on true, näytä MovieForm
  if (isEditing) {
    return (
      <MovieForm 
        currentMovie={movie} // Syötä nykyiset tiedot lomakkeeseen
        onUpdate={handleUpdate} // Päivitysfunktio
        onCancel={() => setIsEditing(false)} // Peruuta-funktio
        isEditing={true} // Kerro lomakkeelle, että se on päivitystilassa
      />
    );
  }

  // Muussa tapauksessa näytä elokuvan tiedot (Katselutila)
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark px-3 mb-4">
        <Link to="/" className="navbar-brand">🎬 Movie Collection</Link>
      </nav>

      <div className="container">
        {error && <div className="alert alert-danger">{error}</div>}
        
        <div className="card shadow">
          <div className="card-body">
            <h1 className="card-title mb-4">{movie.title}</h1>
            
            {/* ... elokuvatiedot ... */}

            <hr />

            <div className="d-flex gap-2">
              <Link to="/" className="btn btn-secondary">
                Back to List
              </Link>
              
              {/* Nappi, joka vaihtaa Muokkaustilaan */}
              <button onClick={() => setIsEditing(true)} className="btn btn-warning"> 
                Muokkaa Elokuvaa
              </button>
              
              <button onClick={handleDelete} className="btn btn-danger">
                Poista Elokuva
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;