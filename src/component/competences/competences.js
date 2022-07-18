import React from "react";
import './competences.css';

function competences() {
  const technos = [
    { nom: "html5", logo: "assets/logos/html5.svg" },
    { nom: "CSS3", logo: "assets/logos/css3.svg" },
    { nom: "Boostrap", logo: "assets/logos/bootstrap4.svg" },
    { nom: "Sass", logo: "assets/logos/sass.svg" },
    { nom: "VS code", logo: "assets/logos/vscode.svg" },
    { nom: "Javascript", logo: "assets/logos/javascript.svg" },
    { nom: "Jquery", logo: "assets/logos/jquery.svg" },
    { nom: "VueJS", logo: "assets/logos/Vue.js.svg" },
    { nom: "React", logo: "assets/logos/React.svg" },
    { nom: "NodeJS", logo: "assets/logos/Node.js.svg" },
    { nom: "php", logo: "assets/logos/php.svg" },
    { nom: "Symfony", logo: "assets/logos/symfony.svg" },
    { nom: "Figma", logo: "assets/logos/Figma.svg" },
    { nom: "MySQL", logo: "assets/logos/mysql.svg" },
    { nom: "Firebase", logo: "assets/logos/firebase.svg" },
  ];

  const displayTechnos = technos.map((techno, key) => (
    <img className="techno" key={key} src={techno.logo} alt={techno.nom} />
  ));

  return (
    <div className="container">
      <h1>Mes compétences</h1>
      <div className="skills">{displayTechnos}</div>
    </div>
  );
}

export default competences;
