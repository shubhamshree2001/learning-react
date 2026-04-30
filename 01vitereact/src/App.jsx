import Chai from "./Chai"

function App() {

  return (
  //  <h1> react with vite</h1>
  //<Chai />
  // here only one tag can b e inserted 
  // but we can return a div and inside div multiple tags can be returned
  // we can also do the same without writing div word // it is also called fragment

  // <div>
  // <h1> react with vite</h1>
  // <Chai />
  // </div>

  <> 
  <h1> react with vite</h1>
  <Chai />
  </>
  )
}

export default App


// we need to bring javascript file/code inside the script inside the html then only it will manipulate

// in vite whats happenning how the project is running?
// 1. inside index.html there is id root and there only the main.jsx file is inserted. so javascript file is injected.
// 2. now in main.jsx we have find the root then inserted the function writter in jsx 
// 3. App.jsx this is what renders at first in main.jsx
// 4. App.jsx has a function written in java script to return html function

// standardijation 
// : if a funciton is returning a component then the function name should start from capital letter
// each file name should also e start from capital letter 
// use extension jsx if the file is returning some component