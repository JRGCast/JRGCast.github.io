import React from 'react';
import './scss/App.scss';
import NavBar from './components/NavBar';
import TheDate from './components/TheDate';
import Routes from './Routes/routes';
function App() {


  return (
    <div className="App">
      <header>
        <nav style={ { position: 'fixed' } } >
          <NavBar />
        </nav>
      </header>
      <section style={ { paddingTop: '40px' } }>
        <TheDate />
        <Routes />
      </section>
    </div>
  );
}

export default App;
