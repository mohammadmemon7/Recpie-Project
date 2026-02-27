import React from 'react'
import axios from '../utils/axios'

const Home = () => {

  async function getDetails(){
    const {data}=await axios.get("/products")
    console.log(data)
  }
  return (
    <div>
      <button onClick={getDetails}>Get details</button>
    </div>
  )
}

export default Home