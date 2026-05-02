import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  // we learn the concept of using arrow function with onclick
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}} // here for using variable no use of curly braces because here already two braces are there
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button
          onClick={() => setColor("red")} // here onclick we need to pass a complete function with parameter so we need to use arrow function
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>

        </div>
      </div>
    </div>
  )
}

export default App