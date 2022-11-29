import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Auth from './Auth'
import User  from './User'
import Navbar from "./components/Navbar";

import HeroSection from './components/HeroSection';
import { RouterSharp } from '@material-ui/icons';


const App = () => {
  return (
     
    <div>
     
      <Routes>
        <Route path="/" element={<HeroSection/>} />

        <Route path="/auth" element={<Auth />} />

      </Routes>
    
    </div>

  );
}

export default App