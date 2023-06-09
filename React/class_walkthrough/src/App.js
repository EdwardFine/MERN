import MenuItems from './components/MenuItems';
import StylesComponent from './components/StylesComponents';
import VideoDetails from './components/VideoDetails';
import Form from './components/Form';
import NewForm from './components/NewForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
      <NewForm/>
    </div>
  );
}

export default App;
