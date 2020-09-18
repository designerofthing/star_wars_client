import React, { useState } from 'react'
import CharacterList from "./CharacterList";
import Search from "./Search";


const Toggle = () => {
  const [ showView, setShowView ] = useState('search')
  
    if (showView !== 'list'){
    return (
      <div>
      <h1 id="view-list" onClick={()=>setShowView('list')}>Click here to view All Characters</h1>
      <Search />
      </div>
    )} else {
      return ( 
        <CharacterList />
       )} 
    
}

export default Toggle
