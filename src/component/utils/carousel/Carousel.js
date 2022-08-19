import React from 'react'
import Card from './Card';

function Carousel(props) {

    const array = props.array;

    const displayCards = array.map((data, key) => (
        <Card data = {data} key ={key} />
      ));
  return (
    <div className='carrousel'>
        {displayCards}
    </div>
  )
}

export default Carousel;
