import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import DetailsEmployee from './components/DetailsEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setLoggedIn(status);
  }

  const handleLogout = () => {
    setLoggedIn(false);
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            (loggedIn) ? 
            <Route path="/" element={<EmployeeList logout={handleLogout}/>}/> 
            :
            <Route path="/" element={<Login loggedIn={handleLogin}/>}/>
          }
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/Employee/Add" element={<AddEmployee />}/>
          <Route path="/Employee/Update/:id" element={<UpdateEmployee />}/>
          <Route path="/Employee/Details/:id" element={<DetailsEmployee />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
