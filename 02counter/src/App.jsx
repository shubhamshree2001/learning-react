import { useState } from "react"; // like this a hook is injected in a file
// to add more hooks add coma and add
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

/// why you need hooks // to update the data in UI we need hooks
// some methods given by react which are hooks to update the UI

function App() {
  // we will use usestate to update the value inside the html code , so it udates the dom
  // usestate gives two values in the form of array
  // we can give any things inside the usestate --> int, bool, array, string, object, function

  let [counter, setCounter] = useState(5); //--> give initial value
  // so first parameter (counter) is a variable and second parameter (setCounter) is a function which helps to set the value for first paramete
  //  let [login, setIsLogin] = useState()
  //let[guestUser, isGuesUser] = useState()

  //let counter = 5;

  const addValue = () => {
    //counter++
    setCounter(counter++);
    // if suppose we will do like this
    // setCounter(counter++);
    // setCounter(counter++);
    // setCounter(counter++);
    // setCounter(counter++);
    // doing like this will not keep kn updating the value on one click directly from the inital value to four time
    // that means this statement does not execute four times in code
    // jasva cript in background sends updates in atches 
    // in batch it will check all are same operation then it wont execute four time because it will also check the counter value 
    // from the use state 

    // +++++ -- to execute multiple times
    // to do such things we need to do it through some different vriable which will tract the update count at eact step 
    // setCounter((prevCounter) => {prevCounter + 1});
    // setCounter((prevCounter) => {prevCounter + 1});
    // setCounter((prevCounter) => {prevCounter + 1});

  };

  const decreaseValue = () => {
    //counter--
    setCounter(counter--);
  };

  return (
    <>
      <h1> counter app</h1>
      <h2> counter value : {counter}</h2>
      <button onClick={addValue}> increase value</button>
      <br />
      <button onClick={decreaseValue}> decrease value</button>
    </>
  );
}

export default App;
