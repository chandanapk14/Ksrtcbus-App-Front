import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registeruser from './components/Registeruser';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Registeruser/>}/>
      </Routes></BrowserRouter>
  );
}

export default App;
