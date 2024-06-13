import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registeruser from './components/Registeruser';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
      <Route path='/reg' element={<Registeruser/>}/>
      
      </Routes></BrowserRouter>
  );
}

export default App;
