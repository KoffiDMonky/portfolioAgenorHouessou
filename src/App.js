import "./App.css";
import Presentation from "./component/presentation/presentation";
import Footer from "./component/utils/footer";
import Header from "./component/utils/header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Presentation />
      <Footer/>
    </div>
  );
}

export default App;
