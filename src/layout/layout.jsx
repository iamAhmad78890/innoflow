import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

const layout = ({children}) => {
  return (
    <div>
        <Header/>
     <main>{children}</main>
      <Footer/>

    </div>
  )
}

export default layout
