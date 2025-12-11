// src/App.jsx (TÄYSI KORJAUS)

// Nämä rivit ovat kriittisiä ja ne puuttuivat aiemmin!
import { Routes, Route } from 'react-router-dom';
import MovieList from './pages/MovieList.jsx'; 
import MovieDetails from './pages/MovieDetails.jsx'; 
import MovieForm from './components/MovieForm.jsx'; // Oletetaan components-kansiossa

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/movies/new" element={<MovieForm />} />
      <Route path="*" element={<h1>404 - Sivua ei löydy</h1>} />
    </Routes>
  );
}

export default App;