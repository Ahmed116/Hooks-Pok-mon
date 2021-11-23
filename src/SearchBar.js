import React from 'react'
import './style.css'

const SearchBar = ({ search, handleChange }) => {
  return (
    <div className='main' style={{ margin: '10px' }}>
      <div className='ui icon input search-input'>
        <input
          type='text'
          placeholder='Search Pokemon Name'
          value={search}
          onChange={handleChange}
        />
        <i className='inverted circular search link icon'></i>
      </div>
    </div>
  )
}

export default SearchBar
