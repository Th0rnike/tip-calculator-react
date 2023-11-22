import './App.css';
import Result from './Components/Result';
import PeopleComponent from './Components/PeopleComponent';
import TipPercentComponent from './Components/TipPercentComponent';
import Bill from './Components/Bill';
import Header from './Components/Header';
import { useState } from 'react';

function App() {

  const [billAmount, setBillAmount] = useState(0);
  const [peopleAmount, setPeopleAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [tipPercent, setTipPercent] = useState("");
  const [custom, setCustom] = useState(0);

  const handleBillChange = (value) => {
    setBillAmount(value);
    calculateResult(value, peopleAmount)
  }

  const handlePeopleChange = (value) => {
    setPeopleAmount(value);
    calculateResult(billAmount, value)
  }

  const calculateResult = (bill, people) => {
    const res = bill / people;
    setResult(res);
  }

  const getPercentage = (value) => {
    setTipPercent(value);
    setCustom(value)
  }

  

  return (
    <div className="App">
      <Header />
      <div className='main_div'>
        <div className='calculation'>
          <Bill onChange={handleBillChange}/>
          <TipPercentComponent getPercentage={getPercentage}/>
          <PeopleComponent onChange={handlePeopleChange}/>
        </div>
        <Result customValue={custom} calculatedResult={result} tipValue={tipPercent}/>
      </div>
    </div>
  );
}

export default App;
