import React from 'react'

import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Auth from './Auth'
import User  from './User'
import About from './About'
import Blogs from './Blogs'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>} />
        
        <Route path='/about' element={<About/>} />
        
        <Route path='/blogs' element={<Blogs/>} />
        <Route path="/user" element={<User />} />

      </Routes>
    </Router>
  );
}

export default App
