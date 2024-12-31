import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import "./App.css"
import { RootState } from "./redux/store";
import { decrement, increment, incrementByValue } from "./redux/Slices/counterSlice";


const App = () => {


  const { value }  = useSelector((state: RootState) => state.counter)
  const [val, setVal] = useState<number>(0)

  const dispatch = useDispatch()

  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(increment())
  }

  const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(decrement())

  }

  const handleIncrementByAmount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(incrementByValue(val))
  }

  return (
    <div className='container'>
      <button className='btn' onClick={handleIncrement}>+</button>
      <p>Count {value}</p>
      <button className='btn' onClick={handleDecrement}>-</button>
      <button className='btn'>Reset</button>

      <input type='number' placeholder='0' value={val} onChange={(e) => setVal(Number(e.target.value))}/>
      <button className='btn' onClick={handleIncrementByAmount}>Increment by amount</button>

    </div>
  )
}

export default App
