import React from 'react'
import PokemonCard from './PokemonCard'
import './style.css'

const PokemonList = ({
  pokemons,
  setPokemonDetails,
  setOpen,
  handleToogleChange,
}) => {
  return (
    <div className='mainCard'>
      {pokemons?.map((pokemon) => (
        <PokemonCard
          key={`pokemon-${pokemon.id}`}
          pokemon={pokemon}
          setPokemonDetails={setPokemonDetails}
          setOpen={setOpen}
          handleToogleChange={handleToogleChange}
        />
      ))}
    </div>
  )
}

export default PokemonList
