import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getTypes, postPokemon } from '../actions'


function validate(input){
  let errors = {};
  if(!input.name){
    errors.name = 'name require'
  }
  if(!input.life || !input.attack || !input.defense || !input.speed){
    
  }
}

export default function PokemonCreate() {
  const dispatch = useDispatch()
  const history = useHistory()
  const types = useSelector((state)=>state.types)

  const [input, setInput] = useState({
    name: '', 
    life: '', 
    attack: '', 
    defense: '', 
    speed: '', 
    height: '', 
    weight: '', 
    types: [],
    img: '',
  })

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])
  


const handleChange = (e)=>{
  setInput({
    ...input,[e.target.name] : e.target.value
  })
}

const handleCheck = (e)=>{
  if(e.target.checked){
    setInput({
      ...input,
      types : [...input.types, e.target.value]
    })
  }
}

const handleSubmit = (e)=>{
  e.preventDefault();
  dispatch(postPokemon(input))
  alert('Pokemon created!')
  setInput({
    name: '', 
    life: '', 
    attack: '', 
    defense: '', 
    speed: '', 
    height: '', 
    weight: '', 
    types: [],
    img: '',
  })
  history.push('/home')
}

  return (
    <div>
      <Link to={'/home'}><button>Back</button></Link>
      <h1>Create your pokemon!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text"
            value={input.name}
            name= 'name'
            onChange={handleChange} />
        </div>
        <div>
          <label>Life:</label>
          <input 
            type="text"
            value={input.life}
            name= 'life'
            onChange={handleChange}  />
        </div>
        <div>
          <label>Attack:</label>
          <input 
            type="number"
            value={input.attack}
            name= 'attack'
            onChange={handleChange}  />
        </div>
        <div>
          <label>Defense:</label>
          <input 
            type="number"
            value={input.defense}
            name= 'defense'
            onChange={handleChange}  />
        </div>
        <div>
          <label>Speed:</label>
          <input 
            type="number"
            value={input.speed}
            name= 'speed'
            onChange={handleChange}  />
        </div>
        <div>
          <label>Height:</label>
          <input 
            type="number"
            value={input.height}
            name= 'height'
            onChange={handleChange}  />
        </div>
        <div>
          <label>Weight:</label>
          <input 
            type="number"
            value={input.weight}
            name= 'weight'
            onChange={handleChange}  />
        </div>
        <div>
          <label>Image:</label>
          <input 
            type="text"
            value={input.img}
            name= 'img'
            onChange={handleChange}  />
        </div>
        <div>
          <label >Types: </label>
          <label><input type="checkbox"
          name='normal'
          value='normal'
          onChange={handleCheck} />normal</label>
          <label><input type="checkbox"
          name='fighting'
          value='fighting'
          onChange={handleCheck} />fighting</label>
          <label><input type="checkbox"
          name='flying'
          value='flying'
          onChange={handleCheck} />flying</label>
          <label><input type="checkbox"
          name='poison'
          value='poison'
          onChange={handleCheck} />poison</label>
          <label><input type="checkbox"
          name='ground'
          value='ground'
          onChange={handleCheck} />ground</label>
          <label><input type="checkbox"
          name='rock'
          value='rock'
          onChange={handleCheck} />rock</label>
          <label><input type="checkbox"
          name='bug'
          value='bug'
          onChange={handleCheck} />bug</label>
          <label><input type="checkbox"
          name='fire'
          value='fire'
          onChange={handleCheck} />fire</label>
          <label><input type="checkbox"
          name='ghost'
          value='ghost'
          onChange={handleCheck} />ghost</label>
          <label><input type="checkbox"
          name='steel'
          value='steel'
          onChange={handleCheck} />steel</label>
          <label><input type="checkbox"
          name='water'
          value='water'
          onChange={handleCheck} />water</label>
          <label><input type="checkbox"
          name='grass'
          value='grass'
          onChange={handleCheck} />grass</label>
          <label><input type="checkbox"
          name='electric'
          value='electric'
          onChange={handleCheck} />electric</label>
          <label><input type="checkbox"
          name='psychic'
          value='psychic'
          onChange={handleCheck} />psychic</label>
          <label><input type="checkbox"
          name='ice'
          value='ice'
          onChange={handleCheck} />ice</label>
          <label><input type="checkbox"
          name='dragon'
          value='dragon'
          onChange={handleCheck} />dragon</label>
          <label><input type="checkbox"
          name='dark'
          value='dark'
          onChange={handleCheck} />dark</label>
          <label><input type="checkbox"
          name='fairy'
          value='fairy'
          onChange={handleCheck} />fairy</label>
          <label><input type="checkbox"
          name='unknown'
          value='unknown'
          onChange={handleCheck} />unknown</label>
          <label><input type="checkbox"
          name='shadow'
          value='shadow'
          onChange={handleCheck} />shadow</label>
        </div>
        <button type='submit'>Create Pokemon</button>
        
      </form>
    </div>
  )
}
