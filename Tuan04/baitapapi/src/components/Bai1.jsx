import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
function Bai1() {
      const [data, setData] = useState([])
  var url = 'https://jsonplaceholder.typicode.com/users';
  

  useEffect(()=>{
  //   var res = fetch(url);
  //     res.then((respone) => {
  //   return respone.json();
  // }).then((datafetch)=>{
  //   setData(datafetch);
  //   return datafetch;
  // })

  //Await sync
  async function fetchdata(params){
    var res = await fetch(url);
    var datafetch = await res.json();
    setData(datafetch);
  }
  fetchdata();
  }, [])
  return (
          data.map((item) => {
            return <div key={item.id}>
          <h2>{item.name}</h2>
          <h2>{item.email}</h2>
        </div>
      })
  )
}

export default Bai1