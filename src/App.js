import quotes from './assets/quotes.json'
import './App.css';
import './backgrounds.css';
import Quotebox from './components/Quotebox/Quotebox.js';
import { useState } from 'react';
import colors from './assets/colors.json'
function App() {
  const randomNumber = Math.random()
  console.log(randomNumber)
  const [i, setI] = useState(randomNumber);

  const newI = () => {
    const randomNumber = Math.random()
    setI(randomNumber)
  }

  const bgColor = colors[Math.floor(i * colors.length)]["color"]
  return (
    <div className={`App ${bgColor}-color`}>
      <div className='title'>
        <h1>Quotes Machine</h1>
      </div>
      
      <Quotebox i={i} next={newI}
      />
    </div>
  );
}

export default App;
