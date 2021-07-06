import React,{useState, useEffect} from 'react';
import { Card } from './components';
import logo from './components/Assets/globo.png';
import england from './components/Assets/england.png';
import france from './components/Assets/france.png';
import argentina from './components/Assets/argentina.png';
import brazil from './components/Assets/brazil.png';
import canada from './components/Assets/canada.png';
import portugal from './components/Assets/portugal.png';
import italia from './components/Assets/italia.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const addTrip = () => {
    let number = count;
    number += 1;
    setCount(number);
  }

  useEffect( () =>{
    console.log('adicionou uma nova viagem');
  }, [count]);

  useEffect( () =>{
    console.log('atualizou a página');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Minhas viagens</h1>
        <div className="cards">
          <Card title="Inglaterra" date="2020" flag={england}/>
          <Card title="França" date="2010" flag={france}/>
          <Card title="Argentina" date="2013" flag={argentina}/>
          <Card title="Canadá" date="2015" flag={canada}/>
          <Card title="Brasil" date="2021" flag={brazil}/>
          <Card title="Portugal" date="2005" flag={portugal}/>
          <Card title="Itália" date="2008" flag={italia} />
        </div>
        <h3>Numero de viagens {count}</h3>
        <button className="button" onClick={addTrip}>Fiz uma nova viagem</button>
      </header>
    </div>
  );
}

export default App;
