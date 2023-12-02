import './App.css';
import EmployeeList from './components/EmployeeList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>Assignment 2 - Crud Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
