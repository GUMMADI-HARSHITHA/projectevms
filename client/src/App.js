//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Hom from './components/Home';
import Nav from './components/Navigation';
import Reg from './components/Register';
import Mar from './components/Marriages';
import Sho from './components/Show'; 
import Up from './components/Update';
import Del from './components/Delete';
import Deta from './components/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      
      
        <Routes>
        <Route path='/' element={<Hom/>}></Route>
        <Route path='/Reg' element={<Reg/>}></Route>
        <Route path='/Mar' element={<Mar/>}></Route>
        <Route path='/Sho' element={<Sho/>}></Route>
        <Route path='/Upd' element={<Up/>}></Route>
        <Route path='/Del' element={<Del/>}></Route>
        <Route path='/Deta' elememt={<Deta/>}></Route>
    
       </Routes>
      
    </div>
    </BrowserRouter>
  

  );
}

export default App;
