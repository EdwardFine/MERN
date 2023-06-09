import MenuItems from './components/MenuItems';
import StylesComponent from './components/StylesComponents';
import VideoDetails from './components/VideoDetails';
import Form from './components/Form';
import NewForm from './components/NewForm';
import MessageBoard from './views/MessageBoard';
import './App.css';
import React, {useState} from 'react';

function App() {
  
  return (
    <div className="App">
      <MessageBoard/>
    </div>
  );
}

export default App;
