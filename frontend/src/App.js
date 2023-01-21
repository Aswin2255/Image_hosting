
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Imagedetails from './pages/Imagedetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<Home/>}></Route>
      <Route path='/login' element = {<Login/>}></Route>
      <Route path='/signup' element = {<Signup/>}></Route>
      <Route path='/details' element = {<Imagedetails/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
