import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';


function App() {
  const [number, setNumber] = React.useState(1);
        function increment() {
          setNumber((prevNumber) => prevNumber + 1);
        }
  return (
    <div className='container'>
      <Header/>
      <Home/>
      <About/>
      <Menu/>
      <Footer/>
      {/* below is to test the knowledge of testing and algorithmns */}
      <h1 data-test-id="currentNumber"> {number} </h1> 
      <button data-testid="add-one" onClick={increment}>
          Add one 
      </button>
    </div>
  );
}

export default App;
