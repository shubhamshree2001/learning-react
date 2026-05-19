import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    //useLoaderData is a hook which is used to fetch the data from the api and return the data to the component
    //it will take data from the githubInfoLoader function and return the data to the component
    //the function githubInfoLoader is called before the component is rendered and the data is fetched from the api and returned to the component
    //this functionis used as a callback in router in main,jsx file in loader property
    const data = useLoaderData()

    // other way of fetching data from the api 
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/shubhamshree2001')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

// creating a loader function to fetch the data from the api
// this function is used to fetch the data from the api and return the data to the component

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shubhamshree2001')
    return response.json()
}