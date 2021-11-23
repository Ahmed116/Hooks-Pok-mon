import React from 'react'
import './style.css'

const PokemonCard = ({
  pokemon,
  setPokemonDetails,
  setOpen,
  handleToogleChange,
}) => {
  // console.log(props, 'props')
  return (
    <div className='mainCard' style={{ margin: 'auto' }}>
      <div className='ui link cards'>
        <div className='card'>
          <div
            className='image'
            onClick={() => {
              setPokemonDetails(pokemon)
              setOpen(true)
            }}
          >
            <h4 className='main'>{pokemon.id}</h4>
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <div className='content'>
            <h2 className='main'>{pokemon.name}</h2>
            <div
              className='content'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {pokemon?.pokemonData?.types?.map((type, index) => (
                <div
                  key={index}
                  className='mainCard'
                  style={{
                    padding: '5px',
                    display: 'inlineBlock',
                    fontWeight: 'bold',
                  }}
                >
                  {type.type.name}
                </div>
              ))}
            </div>
          </div>
          <div
            className='ui toggle checkbox'
            style={{ margin: 'auto', marginBottom: '10px' }}
          >
            <input
              type='checkbox'
              name='public'
              checked={pokemon.captured}
              onChange={(e) => handleToogleChange(e, pokemon.id)}
            />
            <label>Captured</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
