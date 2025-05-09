import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PokemonLista() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map(p =>
          fetch(p.url).then(res => res.json())
        );
        Promise.all(fetches).then(setPokemonList);
      });
  }, []);

  console.log(pokemonList);
  return (
    <>
      <h1>Pokémon List</h1>
    <div className="pokemon-list">
      {pokemonList.map(pokemon => (
        <div key={pokemon.id} className="pokemon-card">
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <Link to={`/pokemon/${pokemon.name}`}>Ver más detalles</Link>
        </div>
      ))}
    </div>
      </>
  );
}

export default PokemonLista;
