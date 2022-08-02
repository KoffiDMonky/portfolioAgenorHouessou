import React from 'react'

function Button(props) {

    const texte = props.texte;
  return (
    <><button className='primary-button'>{texte}</button></>
  )
}

export default Button;
