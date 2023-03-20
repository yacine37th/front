import { createContext } from "react";
import { useCookies } from "react-cookie";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ForgetPassword from "./LOGIN/ForgetPassword";
import SingIn from "./LOGIN/SingIn";
import SingUp from "./LOGIN/SingUp";
import Home from "./Pages/Home";

export const AppContext = createContext(null); 

  
function App() {
  const[cookies,setCookies] = useCookies(['access_token'])

  return (
    <div className="App">
      {/* <AppContext.Provider value={{}}> */}
      <Router>
        {/* <Nav /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} /> */}
          {/* {!cookies.access_token ? } */}
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<SingIn />}/>
          <Route path="/register" element={<SingUp />}/>
          <Route path="/forgetpassword" element={<ForgetPassword />}/>
        </Routes>
      </Router>
      {/* </AppContext.Provider> */}
    </div>
  );
}

export default App;
