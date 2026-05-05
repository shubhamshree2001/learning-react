// name of the component file will be like capital letter and camel case
//rfce
// learning to creste a custom component for input field and select field for currency type
import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange, /* this is method */
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()
   // useId is a react hook which will generate a unique id for us and we can use that id for label and input field so that they are connected and it will be good for accessibility and also for screen readers
   // here we are using useId for amount input field because we have two input field in our app and if we use same id for both then it will create problem so we are using useId to generate unique id for each input field and then we are using that id for label and input field so that they are connected and it will be good for accessibility and also for screen readers

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
        {/* taking classname as parameter so that we can use different css as per user */}
            <div className="w-1/2">
            {/* label --> from / to */}
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                {/* component to input amount */}
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} /* filed is diable or not */
                    value={amount} /* the ammount which user enters */
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    /* onchange takes a function and it has event 
                    here onAmountChange is a function which we are passing but it may be not passed so the syntax used here is 
                    onAmountChange && onAmountChange(Number(e.target.value)) the && means check fist the value is there or not then
                    give e.target.value wrapped with number becuse JS can consider it as string */
                />
            </div>
            {/* component to selecte current option from dropdown */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {/* iteratng/looping  over currency options to display  */}
                        {currencyOptions.map((currency) => (

                            <option key={currency} value={currency}> 
                            {/* using loops always use key for perfomance */}

                            {currency}. {/* this will display */}

                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
/* like this we can return the component but for ig projects we prefer a better approach */
/* creating index.js file in the component folder to handle export */