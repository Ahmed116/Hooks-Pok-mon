import React, { useState, useEffect } from 'react'
import './style.css'
import PokemonList from './PokemonList'
import SearchBar from './SearchBar'
import Header from './Header'
import axios from 'axios'

const Pokemon = ({ setPokemonDetails, setOpen }) => {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchPokemon = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=150`
      const res = await axios.get(url)
      const pokemon = await Promise.all(
        res.data.results.map(async (data, index) => {
          const details = await fetchPokemonDetails(index + 1)
          // console.log(details, 'data')

          const storedPokemon = !!localStorage.getItem(`pokemon-${details.id}`)
            ? JSON.parse(localStorage.getItem(`pokemon-${details.id}`))
            : { captured: false }

          return {
            name: data.name,
            id: details.id,
            captured: storedPokemon.captured,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,

            pokemonData: details,
          }
        })
      )
      setPokemons(pokemon)
    }

    fetchPokemon()
  }, [search])

  const fetchPokemonDetails = async (id) => {
    const items = await axios(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return items.data
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleToogleChange = (value, id) => {
    const index = pokemons.findIndex((item) => item.id === id)
    const newPokemons = [...pokemons]
    newPokemons[index].captured = value.target.checked
    localStorage.setItem(
      'pokemon-' + newPokemons[index].id,
      JSON.stringify(newPokemons[index])
    )
    setPokemons(newPokemons)
  }

  const lowercasedFilter = search.toLowerCase()
  const filteredData = pokemons?.filter((item) => {
    return item.name.toLowerCase().includes(lowercasedFilter)
  })

  return (
    <div>
      <Header />
      <SearchBar search={search} handleChange={handleChange} />
      <PokemonList
        pokemons={search === '' ? pokemons : filteredData}
        setPokemonDetails={setPokemonDetails}
        setOpen={setOpen}
        handleToogleChange={handleToogleChange}
      />
    </div>
  )
}

export default Pokemon
