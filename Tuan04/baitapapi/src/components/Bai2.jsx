import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
function Bai2() {
     const [data, setData] = useState([])
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
   var url = 'https://698311209c3efeb892a4457f.mockap.io/books';
   
 
   useEffect(()=>{

   //Await sync
   async function fetchdata(params){
    try{
        var res = await fetch(url);
        if( !res.ok){
            throw new Error("API request fail");
        }    
        var datafetch = await res.json();
        setData(datafetch);

    }catch(err){
        setError(err.message);
    }finally{
        setLoading(false);
    }

   }
   fetchdata();
   }, [])

   if(loading){
    return <h2>Loading...</h2>
   }
   if (error){
    return <h2>Error: {error}</h2>
   }
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

export default Bai2