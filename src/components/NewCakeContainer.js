import React, {useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'


const NewCakeContainer = (props) => {
    const [number,setNumber] = useState(1)
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy Cake</button>
        </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
  return {
      buyCake: num => dispatch(buyCake(num))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer) 