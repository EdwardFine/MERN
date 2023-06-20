import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Routes, Route} from 'react-router-dom';
import AuthorList from "./views/AuthorList";
import CreateAuthor from "./views/CreateAuthor";
import UpdateAuthor from "./views/UpdateAuthor";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthorList/>}/>
        <Route path="/create" element={<CreateAuthor/>}/>
        <Route path="/update/:id" element={<UpdateAuthor/>}/>
      </Routes>
    </div>
  );
}

export default App;
