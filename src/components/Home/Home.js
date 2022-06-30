import React from "react";
import Navmenu from "../Header/Navmenu";
import Main from "./Body/Main_body/Main";
import Whyus from "./WhyUs/Whyus";
import Services from "./services/Services";
import Getstarted from "./GetStarted/MainStarted";
import UsersSaying from "./UsersSaying/SayHome";
import Footer from "../Footer/Footer";
import LetStart from "./Get/LetStart";
import AhgioGet from "./AnotherGet/AhgioGet";
// import Privacy from "./components/Privacy/Privacy";
// import Support from "./components/Support/Support";

function Home() {
  return (
    <div>
      <Main />
      <Whyus />
      <Services />
      {/* <Getstarted /> */}
      {/* <LetStart /> */}
      <AhgioGet />
      <UsersSaying />
      <Footer />
      {/* <Navmenu /> */}
    </div>
  );
}

export default Home;
