import { Route, Routes } from 'react-router-dom';
import './App.css'
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SignUp/>} />
      <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>
  );
}

export default App
