import React from 'react'

function Button(props) {

    const texte = props.texte;
    const url = props.url;
  return (
    <a href={url} target="_blank" rel="noreferrer"><button className='primary-button'>{texte}</button></a>
  )
}

export default Button;
