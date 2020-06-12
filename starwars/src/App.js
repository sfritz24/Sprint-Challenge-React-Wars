import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import Styles from './styles/AppCard';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios.get("https://swapi.dev/api/people/?limit=10")
    .then(response =>{
      console.log(response.data.results)
      setData(response.data.results)
    })
    .catch(error =>{
      console.log(error)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Styles>
        <h2>Characters 1-10</h2>
        <div>
        {
          data.map(characters =>{
            return <Character key={characters.name} character={characters}/>
          })
        }
        </div>
      </Styles>
    </div>
  );
}

export default App;
