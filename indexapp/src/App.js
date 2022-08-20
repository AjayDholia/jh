import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {
const [data , setData] = useState('');

const[pre , setPre] = useState([]);
  return (
    <div className="App">
     <input type ='text' alt ='input some data'
     value = {data}
      onChange={(e)=>{
        console.log(e.target.value);
         setData(e.target.value);
         console.log(data);
     
     
     
     }}></input>

     <button onClick={()=>{
      setPre([...pre , data]);
      console.log(pre);
      setData('')
     }}>
      submit here
     </button >
     <div>
      {
      pre.length !== 0 ?
      pre.map((elem) =>{
       return(
        <h3>{elem}</h3>
        // <input type = 'checkbox'></input>
       )
      }):null

    }
     </div>
   
     


    </div>
  );
}

export default App;
