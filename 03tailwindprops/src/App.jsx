import "./App.css";
import Card from "./components/card";

// studying tailwind
// steps for  setting up tailwind
// dev dependeicies those which we use while building the project
// dependencies : after building the project these dependencies are needed to run app

function App() {

  let myObj = {
    username : "chai"
  }
  let myarr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="shubham" btnText="click me" myObjone={myObj}/>
      <Card username="satyam" myarrone={myarr}/>
    </>
  );
}

export default App;
