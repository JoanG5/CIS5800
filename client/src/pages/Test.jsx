import React from 'react'
import axios from 'axios'

function Test() {

    const getCart = async () => {
        const response = await axios.get('http://localhost:8000/cart/getCart/')
        console.log(response.data)
    }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="" onClick={getCart}>TEST</button>
    </div>
  )
}

export default Test