import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import AllEmployees from './components/AllEmployees';
import Navbar from './components/Navbar';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<AllEmployees/>}/>
        <Route path='/' element={<AllEmployees/>}/>
        <Route path='/employeeList' element={<AllEmployees/>}/>
        <Route path='/addEmployee' element={<AddEmployee/>}/>
        <Route path='/editEmployee/:id' element={<UpdateEmployee/>}/>
      </Routes>
    </BrowserRouter>

    </>

  );
}

export default App;
