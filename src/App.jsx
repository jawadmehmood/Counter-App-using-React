import { useState } from "react";

function App () {
  let [num , setNum] = useState(0);

  function increaseCounter() {
    if(num >= 0){
      setNum(num + 1)
    }
  }

  function decreaseCounter() {
    if(num > 0){
      setNum(num - 1)
    }
  }
  return(
  <>
    <h1>Hello World</h1>
    <h2>{num}</h2>
    <button onClick={increaseCounter}>Increase Counter</button>
    <button onClick={decreaseCounter}>Decrease Counter</button>
  </>
  )
}

export default App