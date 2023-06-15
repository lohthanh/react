import { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {

  const [currentColor, setCurrentColor] = useState([])

  const boxColorDisplay = (newColor) => {
    setCurrentColor(currentColor => [...currentColor, newColor]);
  }
  
  return (
    <div className="App">
      <h1>Please add your favorite Colors!</h1>
      <div>
        <BoxForm onNewColor = {boxColorDisplay} />
        <BoxDisplay color={currentColor} />
      </div>
    </div>
  );
}

export default App;
