import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // usecallback is a react hook that helps to cache a function definition
  // we are using it because we need to generate password for with/withoout nmber,character different length
  //usecallback(function, depedencies) --> it takes two thing
  // funciton which will be called again and again , and the parameters whcih it is dependent on
  // the dependencies is passed in form of an array


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    } 
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  // we are sending setPassword ecause there is a concept of memonization 
  // a dependency shoukd be given that will hold / cache / to update // it will optimize the fucntion 
  // we are not sending password because it will keep in updtatiing
  // setpassword is the actual method that will set it is oass that


  // we need a something which should be called as page load and that will fill the generated password in the input filed
  //passwordGenerator is the function that will setpassword 
  // but we can not directly call that func, we need to use a hook called useEffect
  // doest not need to hold in some variable like useCallback
  // syntax is similar like useCallback

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  
  //now we need a function to copy the text to clipoard
  // for that we should connect the button with pasword text 
  // here we have useref hook which takes the reference of other component 
  const passwordRef = useRef(null) // we dont hae reference currently

  const copyPasswordToClipboard = useCallback(()=> {
    // here we are using react which makes js to exectute and have window
    // in nextjs we have server side rendering there we dont have window
    // so we will use window here
    
    // we are taking passwrod ref becuse we want to highlight the text what is being selected
    // only window statemment will run the funtionality

    //? using this because it is optinal select --> may be the field can be empty
    passwordRef.current?.select();
    //here we are teleing upto how much range we want to select the text 
    passwordRef.current?.setSelectionRange(0, 999);
    
    // only this window thing will copy the text from password fiel 
    window.navigator.clipboard.writeText(password)

  }, [password])

  return (
    // outer div
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">

      <h1 className="text-white text-center my-3">Password generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">

    {/*     // input field */}
        <input
          type="text"
          value={password}  /* value which is shown here that is password variale */
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef} // here the reference is linked 
        />
        
    {/*     // copy button  */}
        <button
          onClick={copyPasswordToClipboard} 
       /*    // here we need to pass the reference no need of passing parameter */
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>


      <div className="flex text-sm gap-x-2">

        <div className="flex items-center gap-x-1">
      {/*     // range slider */}
          <input
            type="range"
            min={6}
            max={100}
            value={length} 
      /*       // value will e the string length which we have delared above */
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value); 
/*                // this function will set the length of char using slider */
            }}
          />
          <label>Length: {length}</label> 
    {/*       // this will show the length  */}
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox" 
   /*          // checkox for numerallowed or not */
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox" 
           /*  // checkox for charallowed or not */
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>

      </div>

    </div>
  );
}

export default App;
