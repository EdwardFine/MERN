import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing';
import About from './pages/About';
import Navbar from './components/Navbar';
import FavFood from './pages/FavFood';

function App() {
  return (
    <div className="App">
      <h1>My Routing Application</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/favFood/:food' element={<FavFood/>}/>
        <Route path='/favFood/' element={<FavFood/>}/>
      </Routes>
    </div>
  );
}

export default App;
