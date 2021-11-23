import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import PokemonDetailsPopUp from './PokemonDetails'
import Pokemon from './Pokemon'
import 'semantic-ui-css/semantic.min.css'
import './style.css'

const App = () => {
  const [PokemonDetails, setPokemonDetails] = useState(null)
  const [open, setOpen] = useState(false)

  // console.log(pokemon)
  return (
    <div>
      <Pokemon setPokemonDetails={setPokemonDetails} setOpen={setOpen} />
      <PokemonDetailsPopUp
        pokemon={PokemonDetails}
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
