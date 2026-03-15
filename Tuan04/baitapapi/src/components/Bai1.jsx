import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
function Bai1() {
      const [data, setData] = useState([])
  var url = 'https://698311209c3efeb892a4457f.mockapi.io/books';
  

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
          <h2>{item.title}</h2>
          <h2>{item.Name}</h2>
          <h2>{item.email}</h2>
        </div>
      })
  )
}

export default Bai1