import React from 'react'
import { Button, Header, Image, Modal, Progress } from 'semantic-ui-react'
import './style.css'

const PokemonDetails = ({ pokemon, open, setOpen }) => {
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {pokemon?.name}
      </Modal.Header>
      <Modal.Content
        image
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image size='medium' src={pokemon?.image} />
      </Modal.Content>
      <Modal.Description>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Type(s)
        </Header>
        <Modal.Content
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
              style={{ border: '2px solid gray', padding: '5px' }}
            >
              {type.type.name}
            </div>
          ))}
        </Modal.Content>
        <Modal.Content>
          <br />
          <Header
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Stats
          </Header>
          {pokemon?.pokemonData?.stats?.map((stat, index) => (
            <div key={index} style={{ margin: 'auto', width: '80%' }}>
              <h4> {stat.stat.name}</h4>
              <Progress percent={stat.base_stat} progress />
            </div>
          ))}
        </Modal.Content>
        <br />
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Moves
        </Header>
        <Modal.Content
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '5px',
          }}
        >
          {pokemon?.pokemonData?.moves?.slice(0, 12).map((move, index) => (
            <ul key={index}>
              <li style={{ display: 'inlineBlock', fontWeight: 'bold' }}>
                {move.move.name}
              </li>
            </ul>
          ))}
        </Modal.Content>
      </Modal.Description>

      <Modal.Actions>
        <Button
          content='Close'
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default PokemonDetails
