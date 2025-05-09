import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function PokemonDetalles() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(setPokemon);
  }, [name]);
  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="pokemon-detail">
      <h2>{pokemon.name} (#{pokemon.id})</h2>
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        width={250}
      />
      <p><strong>Altura:</strong> {pokemon.height}</p>
      <p><strong>Peso:</strong> {pokemon.weight}</p>
      <p><strong>Tipos:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
      <p><strong>Habilidades:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
    </div>
  );
}

export default PokemonDetalles;
