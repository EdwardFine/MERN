import "bootstrap/dist/css/bootstrap.min.css";
import FetchAPI from "./components/FetchAPI";
import './App.css';
import UseEffectAPI from "./components/UseEffectAPI";
import ColorContext from "./context/ColorContext";
import React, {useState} from 'react';

function App() {
  const [themeColor,setThemeColor] = useState("");
  return (
    <div className="App">
      <ColorContext.Provider value={{themeColor,setThemeColor}}>
      {/*<FetchAPI/>*/}
      <UseEffectAPI/>
      </ColorContext.Provider>
    </div>
  );
}

export default App;
