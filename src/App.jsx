import { useEffect, useState } from 'react'
import './App.css';
import useDebounce from './debounce';


function App() {
  const [start, end] = useDebounce(counterFun, 5000);
  const [counter, setCounter] = useState(1);

  function counterFun() {
    setCounter(pre => pre + 1);
  }
  // useEffect(() => setCounter(pre => pre + 1), [counter]);
  return (
    <>
      <div>
        {counter}
      </div>
    </>
  )
}

export default App
