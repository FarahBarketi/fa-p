import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

import ProductsList from "./Components/Products/ProductsList";
import Articles from "./Components/Article/Articles";
import UserProfile from "./Components/Userprofile";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Alerterrors from "./Components/Alerterrors";
import Articlelist from "./Components/Article/Articlelist";
import AddArticle from "./Components/Article/AddArticle";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_current } from "./Redux/Action/authAction";
import AccouplementList from "./Components/Accouplement/AccouplementList";
import Add from "./Components/Add";
import LandingPage from "./Components/LandingPage";
import Profile from "./Components/Profile";
import Admin from "./Components/Admin/Admin";

function App() {
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(get_current())
},[])
  return (
    <div className="App">
      <Alerterrors />

      <Sidebar>
   
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/addarticle" element={<Add />} />
          <Route path="/articles" element={<Articlelist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/accouplement" element={<AccouplementList />} />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
