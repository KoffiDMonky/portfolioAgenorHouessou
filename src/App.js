import React, { useState } from "react";
import "./App.css";
import Presentation from "./component/presentation/presentation";
import Competences from "./component/competences/competences";
import Contact from "./component/contact/contact";
import Experiences from "./component/experiences/experiences";
import Formations from "./component/formations/formations";
import Passions from "./component/passions/passions";
import Portfolio from "./component/portfolio/portfolio";
import Footer from "./component/utils/footer/footer";
import Header from "./component/utils/header";

function App() {
  //Variable d'état pour définir la valeur qui sera passé en paramètre dans une fonction Switch
  const [body, setbody] = useState("presentation");

  console.log(body);

  //Fonction permettant de passer en paramètre le setBody de la variable d'état dans le header

  const modifierBody = (data) => {
    setTimeout(() => setbody(data), 0);
  };

  //Fonction pour changer l'affichage retourné dans le body
  const fonctionSwitch = (parameter) => {
    switch (parameter) {
      case "presentation":
        return <Presentation />;
      case "competences":
        return <Competences />;
      case "contact":
        return <Contact />;
      case "experiences":
        return <Experiences />;
      case "formations":
        return <Formations />;
      case "passions":
        return <Passions />;
      case "portfolio":
        return <Portfolio />;
      default:
        return <Presentation />;
    }
  };

  return (
    <div className="App">
      <Header modifierBody={modifierBody} />
      {fonctionSwitch(body)}
      <Footer />
    </div>
  );
}

export default App;
