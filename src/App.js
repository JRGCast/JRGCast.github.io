import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Routes from './Routes/routes';

function App() {

  const [joke, setJoke] = useState('');
  const randomJokeFetch = async () => {
    const feching = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    });
    const json = await feching.json();
    setJoke(json.joke);
  };
  return (
    <div className="App">
      <header>
        <nav >
          <NavBar />
        </nav>
      </header>
      <section style={ { paddingTop: '40px' } }>
        <button onClick={ () => randomJokeFetch() }>Joke: { joke }</button>
        <Routes />
      </section>
    </div>
  );
}

export default App;
