import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navmenu from "./components/Header/Navmenu";
// import Main from "./components/Home/Body/Main_body/Main";
// import Whyus from "./components/Home/WhyUs/Whyus";
// import Services from "./components/Home/services/Services";
// import Getstarted from "./components/Home/GetStarted/MainStarted";
// import UsersSaying from "./components/Home/UsersSaying/SayHome";
// import Footer from "./components/Footer/Footer";
import Privacy from "./components/Privacy/Privacy";
import Support from "./components/Support/Support";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      {/* <Navmenu /> */}
      {/* <Home />
       <Navmenu />  */}
      {/* <Navmenu /> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Support />} />
          <Route path="/support" element={<Privacy />} />
        </Routes>
      </div>
      {/* <Navmenu /> */}
      {/* <Main />
      <Whyus />
      <Services />
      <Getstarted />
      <UsersSaying />
      <Footer /> */}

      {/* max-width: 768px 940*/}

      {/**/}

      {/* 
      
      
      
       */}
      {/* <Privacy /> */}
      {/* <Support />  */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
