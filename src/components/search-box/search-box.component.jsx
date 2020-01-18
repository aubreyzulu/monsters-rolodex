import React from 'react';
import './search-box.styles.css.css';

export const SearchBox = ({ monsterSearch, placeholder }) => (
    <input type='search'
        className='search'
        placeholder={placeholder}
        onChange={monsterSearch} />
)