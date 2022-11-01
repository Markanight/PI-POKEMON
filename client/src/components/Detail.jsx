import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import {useDispatch, useSelector} from 'react-redux';
import { getPokemonData } from '../actions';
import './Detail.css'
import Spinner from './Spinner';
import { Link } from 'react-router-dom';





export default function Detail() {
  const [isLoading, setisLoading] = useState(false)
  const {pokeId} = useParams()
  const dispatch = useDispatch()
  const pokemondata = useSelector((state) => state.pokemonData)

  useEffect(()=>{
    setisLoading(true)
    dispatch(getPokemonData(pokeId))
    setTimeout(() => {
      setisLoading(false)
    }, 1500);
  }, [dispatch])

  if(isLoading){
    return <Spinner/>
  }

  return (
    <div>
      <Link to='/home'><button className='btn'>Back</button></Link>
      <div className='card'>
      <div className='card-image'>
        <img className='img' src={pokemondata.map(e=>e.img)} alt={pokemondata.map(e=>e.name)} />
      </div>
      <div className='card-text'>
        <h2 className='name'>{pokemondata.map(e=>e.name)}</h2>
        <p>{pokemondata.map(e=>e.types.map(t=>t.name).join(', '))}</p>
        <div className='life'>
          <div>HP</div>
          <div>{pokemondata.map(e=>e.life)}</div>
        </div>
       
      </div>
      <div className='card-stats'>
        <div className='stat'>
          <div>{pokemondata.map(e=>e.attack)}</div>
          <div>Attack</div>
        </div>
        <div className='stat'>
          <div>{pokemondata.map(e=>e.defense)}</div>
          <div>Defense</div>
        </div>
        <div className='stat'>
          <div>{pokemondata.map(e=>e.speed)}</div>
          <div>Speed</div>
        </div>
      </div>
    </div>
    </div>
    
  )
}
