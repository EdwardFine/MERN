import MenuItems from './components/MenuItems';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My First React App</h1>
      <MenuItems dishName={"Calamari"} price={15.25} likes={10}>
        ***Test your food's heat level
      </MenuItems>
      <MenuItems dishName={"Pizza"} price={20.50} likes={8}/>
      <MenuItems dishName={"Sushi"} price={19.10} likes={9}/>
      <MenuItems dishName={"Prime Rib"} price={30.99} likes={10}/>
    </div>
  );
}

export default App;
