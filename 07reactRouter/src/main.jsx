import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'

/* // steps to create router */
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",  // initial path is empty because it will be rendered when the user visits the root path
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// other way of declaring all routes 
const router = createBrowserRouter(
  createRoutesFromElements(
    /* we have given layout at top level because we want to pass all other component as outlet  */
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />

      {/* <Route path='about' element={<About />} > */}
      {/* this is path like about/team --> route inside route */}
      {/* <Route path='team'/> */}
      {/* </Route> */}
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* creeatiing user route example --> user/1 
        here only we will do all the logic how we will take the parameter from the url
        here we are declaring that parameter as userid same we will use in the user component
      */}
      <Route path='user/:userid' element={<User />} />
       <Route 
       /* the other way of calling api using loader it comes in router
       the data fetching starts before landing on the page the event is triggered when the pointer points the target
       here also we can directly call the api
       calling the function githubInfoLoader to fetch the data from the api  */
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       /> 
    </Route>
  )
)


/* // here we will not use App 
// we have user react router so we need to use BrowserRouter to wrap our app
// BrowserRouter is a component that will wrap our app and provide the routing functionality to our app
// we need to import it from react-router-dom
// ReactProvider is a component that will wrap our app and provide the react context to our app
//ReactProvider takes props */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* router provider is a wrapper */}
    <RouterProvider router={router} />
  </StrictMode>,
)

/* // so now we need to learn to create router and how to use it
// we have two types of router in react router 
// 1. BrowserRouter : it uses the HTML5 history API to keep our UI in sync with the URL
// 2. HashRouter : it uses the hash portion of the URL (window.location.hash) to keep our UI in sync with the URL */