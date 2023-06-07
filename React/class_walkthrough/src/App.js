//import MenuItems from './components/MenuItems';
import StylesComponent from './components/StylesComponents';
import VideoDetails from './components/VideoDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <StylesComponent/>
      <hr/>
      <VideoDetails title='Boondock Saints' views={200} hashtags={['boondock','saints','awesomemovie']}/>
      <VideoDetails title='Creed' views={500} hashtags={['creed','boxing','Michael B Jordan']}/>
      <VideoDetails title='Law Abiding Citizen' views={1000} hashtags={['law','dark','thriller']}/>
      <VideoDetails title='Pulp Fiction' views={1250} hashtags={['dark','thrilling','mature']} />
    </div>
  );
}

export default App;
