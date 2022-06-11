import React,{useState,useEffect} from "react";

function App() {
  const [data,setData]=useState([])

  useEffect(()=>{
    fetch('http://localhost:5205/login', {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then((response)=>response.json())
    .then((dato)=>setData(dato))
  });
  
  return (
    <div className="App">
      {data.map((dato)=>{
        return(
          <div style={{display:"flex"}}>
            <h1>{dato.name}</h1>
            <h2>{dato.password}</h2>
          </div>
        )
      })}
    </div>
  );
}

export default App;
