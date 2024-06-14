import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registeruser from './components/Registeruser';
import Login from './components/Login';
import Addbus from './components/Addbus';
import ViewBus from './components/ViewBus';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
      <Route path='/reg' element={<Registeruser/>}/>
      <Route path='/add' element={<Addbus/>}/>
      <Route path='/viewbus' element={<ViewBus/>}/>
      
      </Routes></BrowserRouter>
  );
}

export default App;
