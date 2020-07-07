import React, { useState, useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [count , setCount] = useState(0);
  const prevCountRef = useRef();
  const prevCount = prevCountRef.current;
  useEffect(()=>{
    prevCountRef.current = count;
  }) 
  const onClick = useCallback(()=>{
    setCount((count)=>count+1);
  },[])
  return (
    <div>
      <button onClick={onClick}>{count}+{prevCount}</button>
    </div>
  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

