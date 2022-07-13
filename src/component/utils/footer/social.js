import React from "react";

function social(props) {

  const media = props.media;
  const image = props.image;
  const url = props.url;

  return (
    <div className="social">
      <a href={url} target="_blank" rel="noreferrer">
        <img className="media" src={image} alt={media} />
      </a>
    </div>
  );
}

export default social;
