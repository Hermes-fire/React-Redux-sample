import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux'


const HooksIceCreamContainer = () => {

  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Number of cakes - {numOfIceCreams}</h2>
        <button onClick={()=>dispatch(buyIceCream())}>Buy Cake</button>
    </div>
  )
}

export default HooksIceCreamContainer