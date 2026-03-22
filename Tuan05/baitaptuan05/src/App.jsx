import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const url ="/posts2.json"
  useEffect(() => {
    async function fetchFuntion() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
    }
    fetchFuntion();
  },[]);
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <input type="text" 
    value={searchTerm}
    onChange={(e) =>setSearchTerm(e.target.value) }
    />

    {filteredData.map((item) =>{
        return (<div key={item.id}>
          <h2>{item.title}</h2>
          <h2>{item.body}</h2>
    </div>
    )}
    )}
    </div>
    
  
  )
  
}

export default App
