import './App.css';
//importamos componentes
import { CompRutas } from './Componentes/config/Rutas';
//importamos librerias routes
import { BrowserRouter as Router } from 'react-router-dom'
import { CompNav } from './Componentes/config/Navbar';
import { CompFooter } from './Componentes/config/Footer';

function App() {
  return (
    <div className="App">
      {/* <script src="https://app.embed.im/snow.js" defer></script> */}

      <Router>
        <CompNav />
        <CompRutas />
        <CompFooter />
      </Router>
    </div>
  );
}

export default App;

//primero se inicia el backend