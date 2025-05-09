import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonLista from './PokemonLista';
import PokemonDetalles from './PokemonDetalles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonLista />} />
        <Route path="/pokemon/:name" element={<PokemonDetalles />} />
      </Routes>
    </Router>
  );
}

export default App;
