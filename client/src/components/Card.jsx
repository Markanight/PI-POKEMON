import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

export default function Card({pokemon}) {
  
    return (
    <div>
        <div className={styles.pokemonCard}>
        <Link to={'/home/' + pokemon.id}>
            <div className={styles.topCard}>
              <h3 className={styles.title}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
            </div> 
              <img src={pokemon.img} alt="img not found" width={155} height={150} />
            <h5 className={styles.types}>{pokemon.types.map(el=>el.name).join(', ')}</h5>            
        </Link>
        </div>
        <div className={styles.back}>
          
        </div>
    </div>
 
  )
  
  
}
      
