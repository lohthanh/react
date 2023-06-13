import './App.css';
import { Routes, Route } from "react-router-dom";
import {Home} from './components/Home';
import Words from './components/Words';
import {StyledWord} from './components/StyledWord';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/:words" element={<Words/>} />
        <Route path="/:words/:textColor/:bgColor" element={<StyledWord/>} />
      </Routes>
    </div>
  );
}

export default App;
