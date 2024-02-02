import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import Vendors from "./components/Vendors";
import Users from "./components/Users";
import Categories from "./components/Categories";
import Products from "./components/Products";

function App() {

  return <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/registration" element={<Registration/>}/>
    <Route path="/login" element={<Login/>}/>
    {/* <Route path="/dashboard" element={<AdminDashboard/>}/>
    <Route path="/vendors" element = {<Vendors/>}/>
    <Route path="/users" element = {<Users/>}/>
    <Route path="/categories" element = {<Categories/>}/>
    <Route path="/products" element={<Products/>}/> */}
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
