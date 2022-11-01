import React from 'react'
import { filterPokemonByType, filterPokemonByDB, filterPokemonByStrength} from '../actions'
import { useDispatch } from 'react-redux'
import styles from './Filters.module.css'

export default function Filters({handleFilterName}) {
    
    const dispatch = useDispatch()
    const handleFilterType = (e)=>{
        dispatch(filterPokemonByType(e.target.value))
      }
    const handleFilterDb = (e) => {
      dispatch(filterPokemonByDB(e.target.value))
    }
    const handleFilterAttack = (e) => {
      dispatch(filterPokemonByStrength(e.target.value))
    }
    
  return (
    
      <div className={styles.filters}>
            <label className={styles.select1}>Alphabet:</label>
            <select className={styles.select} onChange={handleFilterName}>
              <option value={"all"}>All</option>
              <option value={'asc'}>Ascending</option>
              <option value={'desc'}>Descending</option>
            </select>
            <label className={styles.select1}>Strength:</label>
            <select className={styles.select} onChange={e => handleFilterAttack(e)}>
              <option value={"all"}>All</option>
              <option value={'strength'}>Strongers</option>
              <option value={'weakers'}>Weakers</option>
            </select>
            <label className={styles.select1}>Type:</label>
            <select className={styles.select} onChange={e => handleFilterType(e)}>
              <option value="all">All</option>
              <option value="normal">Normal</option>
              <option value="fighting">Fighting</option>
              <option value="flying">Flying</option>
              <option value="poison">Poison</option>
              <option value="ground">Ground</option>
              <option value="rock">Rock</option>
              <option value="bug">Bug</option>
              <option value="ghost">Ghost</option>
              <option value="steel">Steel</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Grass</option>
              <option value="electric">Electric</option>
              <option value="psychic">Psychic</option>
              <option value="ice">Ice</option>
              <option value="dragon">Dragon</option>
              <option value="dark">Dark</option>
              <option value="fairy">Fairy</option>
              <option value="unknown">Unknown</option>
              <option value="shadow">Shadow</option>
            </select>
            <label className={styles.select1}>Creation:</label>
            <select className={styles.select} onChange={e => handleFilterDb(e)}>
              <option value="all">All</option>  
              <option value="API">Existent</option>
              <option value="created">Created</option>
            </select>
      </div>  
    
  )
}
