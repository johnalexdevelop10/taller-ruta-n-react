import {useState, useEffect} from 'react'

import './App.css';

function App() {
 const [characters, setCharacters]= useState([])

async function getAllCharacters(){
const response = await fetch('https://rickandmortyapi.com/api/character')
const characters = await response.json()
const alivedCharacters = characters.results.filter(character=>character.status==='Alive')
setCharacters(alivedCharacters)
}

function killCharacters(){
const killCharacters = [...characters]
killCharacters.forEach(character=>  character.status = 'Alive')
setCharacters(killCharacters)//asignamos el valor al stado

}

useEffect(()=>{
getAllCharacters()
},[])



  return (
    <section className="main">
     <h1 className="title">Rick y morty</h1>
     <p className="description">esta es una lista de personajes Rick</p>
     <button className='button' 
     onClick={killCharacters}>Matar todos los personajes</button>
     <section className="grid">
     {characters?.map(character=>(
     
      <div className="card">
     <img 
     className="image"
     src={character.image}
     alt={character.name}
     height="200px"
     width="200px"
     />
     
     <h2 className="name">{character.name}</h2>
     <div className='info'>
     <span className={`status ${character.status !== 'alive' ? 'red-status' : ''}`}/>
     <span className="text">{character.status} - {character.species}</span>
     </div>
     </div>
     
     
     ))}
  
    

    
    
     </section>
    </section>
    );
}

export default App;
//nota: titulo = estado
//foreach=no retorna nada