import { useState } from 'react';
import WeatherApp from './WeatherApp.jsx';


import './App.css';


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
     <div>
      <WeatherApp/>
   
    

     </div>
        
        
    </>
  )
}

export default App
