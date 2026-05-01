import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// creating here the jsx function to execute here itself it is similar to app.jsx we can fo here also
function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}


// ++ in this code lock we are trying to execute the tag created by us to add inside the render 
// this is not working inside the render how we have done in custom react
// the React element is created whihc we are trying to render inside react render does not execute 
// because we have created according to our custom react render 
// but there is another way like we created another elemtn which is basically a html that can render 
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// so for it we have created another elemnt whihc ishow react render accepts

// this is direct tag we are creating
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "chai aur react"

// and in this we are usig react create element to add the elelemt
// this react.createelement gets injected in react render --> bable (transpiler) helps to inject this element in react render
// the syntax of writing creating elemnt
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement // here the final value can only be added no if , for lop or any other logic //ecause it is converting into object
)



//createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
//)

//</> -->> using this converts anything to object


// we are using react render here
ReactDOM.createRoot(document.getElementById('root')).render(
   //<MyApp />
     //reactElement
     //anotherElement
  <App />
)
