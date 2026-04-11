import React from 'react'
import { useRecoilValue } from 'recoil'
import { countState } from '../CounterState'

function ComponentA() {
    const count = useRecoilValue(countState);
  return (
    <div><h2>Component A</h2>
    Count" {count}
    </div>
  )
}

export default ComponentA;