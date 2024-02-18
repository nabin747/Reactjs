import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './pages/Auth/Login';
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route Component={Login} path='/login' />
        {/* <Route Component={Dashboard} path='/' /> */}
        {/* <Route Component={Register} path='/register' /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
