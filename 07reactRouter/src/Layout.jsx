import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

/* // this is Layout beacause are header and footer are common for all the pages so we will create a layout component 
// and put the header and footer in it and then we will use this layout component in our router
// the Outlet component is used to render the child routes of the layout component 
// Outlet is a placeholder for the child routes of the layout component, it is used to render custom component */

// Here we have given Outlet, so giving outlet means we can do nesting using react router dom
// and same layout is used in main.jsx file in router provider at top level
//so other component can be given in that layout using outlet
function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout