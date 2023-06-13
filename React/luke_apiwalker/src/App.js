import './App.css';
import {Routes, Route} from 'react-router-dom'
import DisplayInfo from './pages/DisplayInfo';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Input/>
      <Routes>
        <Route path='/' element={<DisplayInfo/>}/>
        <Route path='/:catagory/:id' element={<DisplayInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
