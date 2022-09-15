import './App.css';
import Registry from './components/Registry';
import Header from "./components/Header"
import Total from './components/Total'
import About from './components/About'
import { Link, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
      <Header />
      <h2>
        <Link to='/'>Overview</Link>
      </h2>
      <h2>
        <Link to='/total'>Total Friends</Link>
      </h2>
      <h2>
        <Link to='/about'>About</Link>
      </h2>
      <Routes>
        <Route path='/' element={<Registry />}></Route>
        <Route path='/total' element={<Total />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
