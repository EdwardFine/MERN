import {Routes,Route} from 'react-router-dom'
import './App.css';
import RedirectToHome from './components/RedirectToHome';
import PlayersList from './views/PlayersList';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<RedirectToHome/>}/>
        <Route path='/players/list' element={<PlayersList/>}/>
      </Routes>
    </div>
  );
}

export default App;
