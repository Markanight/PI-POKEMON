import React from 'react'
import styles from './Paginado.module.css'

export default function Paginado({pokemonsPerPage, allPokemons, paginado}) {
    const pageNumbers = []

    for (let i = 0; i <=Math.ceil(allPokemons/pokemonsPerPage); i++) {
        pageNumbers.push(i+1)        
    }
    pageNumbers.pop()
  return (
    <nav className={styles.paginado}>
        <ul className={styles.pageNumbers}>
            {pageNumbers && pageNumbers.map(number => (
                <li key={number}>
                    <button className={styles.numbers} onClick={() => paginado(number)}>{number}</button>
                </li>
                
            ))}
        </ul>
    </nav>
  )
}