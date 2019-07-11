import React from 'react';
import CuisineOptions from './CuisineOptions.jsx';

const CuisineMenu = (props) => {    
    return (
        props.cuisines.map((cuisineGroup) => <CuisineOptions cuisines={cuisineGroup} />)
    )
}

export default CuisineMenu;