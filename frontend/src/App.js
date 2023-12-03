import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import DetailsEmployee from './components/DetailsEmployee';
import UpdateEmployee from './components/UpdateEmployee';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />}/>
          <Route path="/Employee/Add" element={<AddEmployee />}/>
          <Route path="/Employee/Update/:id" element={<UpdateEmployee />}/>
          <Route path="/Employee/Details/:id" element={<DetailsEmployee />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
