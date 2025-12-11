// src/components/MovieForm.jsx

import { useState, useEffect } from "react";

// MovieForm hyväksyy nyt kolme mahdollista propia:
// 1. onAddMovie (käytetään luontiin MovieListissä)
// 2. currentMovie (käytetään esitäyttöön MovieDetailsissä)
// 3. onUpdate ja onCancel (käytetään päivitykseen MovieDetailsissä)

function MovieForm({ onAddMovie, currentMovie, onUpdate, onCancel }) {
  
  // Määritä aloitustila sen perusteella, luodaanko uutta vai muokataanko vanhaa
  const isEditing = !!currentMovie; 
  const defaultState = {
    title: '',
    director: '',
    year: '',
    genre: '',
    rating: '',
    description: ''
  };

  // Käytä olemassa olevia tietoja, jos muokataan, muuten käytä oletustilaa
  const [formData, setFormData] = useState(currentMovie || defaultState);
  
  // Varmista, että lomake nollataan, kun sitä käytetään listanäkymässä luomiseen
  useEffect(() => {
    if (!isEditing) {
      setFormData(defaultState);
    }
  }, [onAddMovie]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Jos ollaan muokkaustilassa, kutsutaan onUpdate-funktiota (MovieDetails.jsx:stä)
      onUpdate(formData);
    } else {
      // Jos luodaan uutta, kutsutaan onAddMovie-funktiota (MovieList.jsx:stä)
      onAddMovie(formData);
      setFormData(defaultState); // Nollaa lomake luonnin jälkeen
    }
  };
  
  const formTitle = isEditing ? 'Muokkaa Elokuvaa' : 'Lisää Uusi Elokuva';

  return (
    <div className={`card shadow ${isEditing ? 'mb-4' : 'h-100'}`}>
      <div className="card-header bg-primary text-white">
        <h5>{formTitle}</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {/* Titel */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title *</label>
            <input 
              type="text" 
              className="form-control" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              required
            />
          </div>
          
          {/* Director */}
          <div className="mb-3">
            <label htmlFor="director" className="form-label">Director</label>
            <input 
              type="text" 
              className="form-control" 
              name="director" 
              value={formData.director} 
              onChange={handleChange} 
            />
          </div>

          {/* Year */}
          <div className="mb-3">
            <label htmlFor="year" className="form-label">Year</label>
            <input 
              type="number" 
              className="form-control" 
              name="year" 
              value={formData.year} 
              onChange={handleChange} 
            />
          </div>

          {/* Genre */}
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">Genre</label>
            <input 
              type="text" 
              className="form-control" 
              name="genre" 
              value={formData.genre} 
              onChange={handleChange} 
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea 
              className="form-control" 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              rows="3"
            ></textarea>
          </div>
          
          {/* Submit/Save button */}
          <button type="submit" className="btn btn-success me-2">
            {isEditing ? 'Tallenna Muutokset' : 'Lisää Elokuva'}
          </button>
          
          {/* Peruuta-nappi näkyy vain muokkaustilassa */}
          {isEditing && (
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Peruuta
            </button>
          )}

        </form>
      </div>
    </div>
  );
}

export default MovieForm;
