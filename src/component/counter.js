import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/actions/index'

const Counter = () => {
  //   const [counter, setCounter] = useState(0)
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <>
      counter: {counter}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}

export default Counter
