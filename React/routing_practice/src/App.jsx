import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Number from './pages/Number';
import ColorWord from './pages/ColorWord';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:num' element={<Number/>}/>
        <Route path='/:word/:colorW/:background' element={<ColorWord/>}/>
      </Routes>
    </div>
  );
}

export default App;
