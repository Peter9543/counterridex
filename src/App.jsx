import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementbyamount, reset } from './assets/redux/counterslice';
import { Alert } from 'bootstrap';






function App() {
  const [amount,setamount]=useState(0)
  const dispatch=useDispatch()
   const {count}=useSelector(state=>state.counterReducer)
   const handleincrementbyamount=()=>{
     if(amount){
      dispatch(incrementbyamount(Number(amount)))
     }
     else{
      alert("enter the amount  to increment amount counter value")
     }
   }
  return (
    <>
      <div className="container  p-4">
       
        <div className="text-center p-3">
          <h1>Counter App</h1>
        </div>

      
        <div className="border border-3 border-dark rounded mt-5 p-4 bg-black">
        
          <div className="text-center d-flex justify-content-center align-items-center mb-4">
            <h1 className="display-4 text-light">{count}</h1>
          </div>

          <div className="d-flex justify-content-between px-3">
            <button onClick={()=>dispatch(increment())} type="button" className="btn btn-primary">Increment</button>
            <button  onClick={()=>dispatch(reset())}  type="button" className="btn btn-danger">Reset</button>
            <button  onClick={()=>dispatch(decrement())} type="button" className="btn btn-success">Decrement</button>
          </div>

       
          <div className="d-flex align-items-center justify-content-around mt-5">
            <input onChange={(e)=>setamount(e.target.value)}
              type="number" 
              placeholder="Enter amount" 
              className="form-control w-50 me-3"
            />
            <button onClick={handleincrementbyamount}  type="button" className="btn btn-primary">
              Increment by Amount
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
