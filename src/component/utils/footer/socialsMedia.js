import React from "react";
import Social from "./social";

function socialsMedia() {
  const medias = [{media: "instagram", image:"assets/logos/instagram.svg", url : "https://www.instagram.com/agenorhouessou_photo/"}, {media: "linkedIn", image:"assets/logos/linkedin.svg", url : "https://fr.linkedin.com/in/ag%C3%A9nor-houessou"} ];

  const displayMedias = medias.map((media, key) => (
    <Social media={media.media} image={media.image} url={media.url} key={key} />
  ));

  return <div className="social-media">{displayMedias}</div>;
}

export default socialsMedia;
