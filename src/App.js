import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Routes from './Routes/routes';

function App() {
  const [theDate, setTheDate] = useState('');

  useEffect(() => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    const actualDate = new Date().toLocaleString('pt-br', options);
    setTheDate(actualDate);
    setInterval(() => {
      const actualDate = new Date().toLocaleString('pt-br', options);
      setTheDate(actualDate);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header>
        <nav >
          <NavBar />
        </nav>
      </header>
      <section style={ { paddingTop: '40px' } }>
        <span>{ theDate }</span>
        <Routes />
      </section>
    </div>
  );
}

export default App;
