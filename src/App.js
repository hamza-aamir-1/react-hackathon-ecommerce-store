import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Layout from './pages/layout';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoggedInState from './context/LoggedinContext/LoggedinState';
import AdminLogin from './dashboard/pages/login/AdminLogin';
import Dashboard from './dashboard/pages/dashboard';
import AddProduct from './dashboard/pages/addProduct/AddProduct';
import ShowProducts from './dashboard/pages/showProducts/ShowProducts';

function App() {
  return (
    <LoggedInState className="App">
      <ToastContainer />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/showproduct' element={<ShowProducts />} />
      </Routes>
      </BrowserRouter>
    </LoggedInState>
  );
}

export default App;
