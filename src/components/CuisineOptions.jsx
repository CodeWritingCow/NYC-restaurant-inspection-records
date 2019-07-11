import React from 'react';

const CuisineOptions = (props) => {
    return (
        <optgroup label={props.cuisines.type}>
            {props.cuisines.list.map(cuisine => <option key={cuisine} value={cuisine}>{cuisine}</option>)}
        </optgroup>
    );
}

export default CuisineOptions;