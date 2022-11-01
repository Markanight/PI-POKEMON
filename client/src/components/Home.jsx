import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemonDetail, getPokemons, getNamePokemons} from '../actions';
import { Link } from 'react-router-dom';
import Card from './Card';
import styles from './Home.module.css'
import Paginado from './Paginado';
import Filters from './Filters';
import { filterPokemonByName } from '../actions';
import Spinner from './Spinner';
import SearchBar from './SearchBar';




export default function Home() {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [orden, setOrden] = useState('')
    const allPokemons = useSelector((state) => state.pokemons)
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonsPerPage, setPokemonsPerPage] = useState(8)
    const indexOfLastPokemon = currentPage * pokemonsPerPage
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)
    
    const paginado = (pageNumber) => {
      setCurrentPage(pageNumber)
  }
  
  useEffect(()=>{
    setIsLoading(true)
  
    dispatch(getPokemons())
    dispatch(getPokemonDetail())

    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  }, [dispatch])
  
  if(isLoading){
    return <Spinner/>
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getPokemons())
  }
  const handleFilterName = (e) => {
    e.preventDefault();
    dispatch(filterPokemonByName(e.target.value))
    setCurrentPage(1);
    setOrden(`${e.target.value}`)
  }
  

  return (
    <div>
      <div className={styles.navbar}>
      <Link className={styles.createPokemon} to={'/pokemon'}>Create pokemon</Link>
      <Link to='/home'><h1 className={styles.title }>Pokemons</h1></Link>
      <Link className={styles.btn1} to='/home'><button className={styles.btn} onClick={e => handleClick(e)}>Load pokemons again</button></Link>
      {/* <button className={styles.btn} onClick={e => handleClick(e)}>Load pokemons again</button> */}
      </div>
      <Filters handleFilterName={e=>handleFilterName(e)} className={styles.filters}/>
      <SearchBar />
      <ul className={styles.pokemonsGrid}>
      {
      currentPokemons?.map((pokemon) =>
      {
          return (
                <Card pokemon={pokemon} key={pokemon.id}/>
            );
          })
      }
      </ul>
      <Paginado
            pokemonsPerPage = {pokemonsPerPage}
            allPokemons = {allPokemons.length}
            paginado = {paginado}
            />
    </div>
  )
}
            
            
      
