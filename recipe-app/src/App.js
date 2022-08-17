import { useState } from 'react';
import './App.css';
import Input from './Input';
import Square from './Square';

function App() {
  const [color,setColor]=useState('');
  const [color1,setColor1]=useState('');

//   const handleClick=()=>{
//     setCount(count+1);
//     console.log(count);//0
//   }

//   const handleClick1=()=>{
//     setCount((count)=>count+1);
//     console.log(count);//0
//   }
  
//   const handleClick2=()=>{
//     setCount(count+1);
//     setCount(count+1);
//     console.log(count);//0
//   }

  return (
    <div className="App">
      <Square color={color} setColor={setColor} />
      <Input color={color} setColor={setColor}/>
    </div>
  );
}

export default App;
