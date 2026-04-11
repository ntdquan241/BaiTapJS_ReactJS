import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { countState } from '../CounterState'

function ComponentB() {
    const [count,setCount] = useRecoilState(countState);
  return (
    <div><h2>ComponentB</h2>
    <button onClick={() => setCount(count + 1)}>Tang</button>
        <button onClick={() => setCount(count-1)}>Giam</button>
    </div>
    
  )
}

export default ComponentB;