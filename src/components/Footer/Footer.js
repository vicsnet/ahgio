import React from 'react'
import SubFooter from "./Subfooter";
import Mainfooter from "./Mainfooter";
import './footer.css'

function Footer() {
  return (
    <div>
      <SubFooter className="foot" />
      <Mainfooter className="foot-push" />
    </div>
  );
}

export default Footer