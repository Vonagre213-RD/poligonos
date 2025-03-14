//Librerias
import { BrowserRouter as Router, Routes, Route } from "react-router";
//Componentes de la pagina
import NavBar from "./components/Navbar/NavBar.jsx";
import Home from './components/HomeComp/Home.jsx';
import Productos from './components/Poligonos.jsx';


function App() {
  return (
    <>
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Poligonos" element={<Productos/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
