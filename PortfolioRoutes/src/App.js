import './App.css';
import DigiNavbar from './DigiNavbar';
import DigiHome from './DigiHome';
import DigiFooter from './DigiFooter';
import { Route, Routes } from 'react-router-dom';
import NoPage from './NoPage';


function App() {
  return (
    <div className="App">
      
      {/* <DigiNavbar/>
      <DigiHome/>
      <DigiFooter/> */}
      <Routes>
      <Route path='/' element={<DigiHome/>}/>
      <Route path='home' element={<DigiHome/>}/>
      <Route path='footer' element={<DigiFooter/>}/>
      <Route path='navbar' element={<DigiNavbar/>}/>
      <Route path='*' element={<NoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
