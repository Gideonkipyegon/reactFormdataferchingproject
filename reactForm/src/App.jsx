import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App(){
    return (
      <div class="container">
      <form name="searchParam" value="formData.searchParam" onSubmit={handleSubmit}>
      <label For="search">search:</label>
       <input type="text" />
       <button type="submit" class="btn">Getchdata</button>
       </form> 
     </div>
  );
}

export default App
