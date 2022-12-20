import "./App.css"
import React, { useEffect, useState } from "react"
const App=()=>{
  const [list,setList]=useState([]);
  const [name,setname]=useState([]);
  const [loading,setloading]=useState();
  useEffect(()=>{
    setloading(true)
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(data=>data.json())
    .then(data=>{
    console.log(data)
    setList(data)
    setloading(false)
    });
  },[name])
  if(loading) return <h1>Loading...</h1>
  return <div>
    <input type="text" onChange={e=>setname(e.target.value)} value={name}/>
    {list.map((li,idx)=><table><tr key={idx}><td>{li.id}</td>&nbsp;<td>{li.title}</td></tr>
    </table>)}
    </div>
}
export default App