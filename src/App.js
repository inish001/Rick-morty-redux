import { Routes, Route } from 'react-router';
import './App.css';
import CharContainer from './components/CharContainer';
import CharDetails from './components/CharDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/home" element = {<CharContainer/>} />
        <Route path = "/home/:characterId" element = {<CharDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
