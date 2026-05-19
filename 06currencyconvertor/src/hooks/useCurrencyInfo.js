import { useEffect, useState } from "react";


//desiginng a custom hook
// using use state to set the currency state initailly asigning it null oject 
// returning the data from the response as the response will be inside currency object
//use effect because we want to fetch the data when the currency changes it is dependent on currency
// export default is used so that we can import it with any name in the component where we want to use it
// asically we should use this hook in the component where we want to show the data of currency and we will pass the currency as parameter and it will return the data of that currency
// so export means returning the complete method and we can have the access of data also  

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        //https://api.frankfurter.dev/v1/latest?from=USD
        fetch(`https://cors-anywhere.herokuapp.com/https://api.frankfurter.app/latest?from=${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[rates]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;