import './App.scss';
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './pages/Player';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Netflix />} />
        <Route path='/player' element={<Player />} /> 
      </Routes>
    </Router>
  );
}

export default App;
