import React from 'react'
import Main from './Body/Main_body/Main'
import Whyus from './WhyUs/Whyus'
import Services from './services/Services'
import Getstarted from './GetStarted/Started'
import UsersSaying from './UsersSaying/SayHome'
import Footer from '../Footer/Footer'

function Body() {
  return (
      <div>
          <Main />
          <Whyus />
          <Services />
          <Getstarted />
          <UsersSaying />
          <Footer />
    </div>
  )
}

export default Body