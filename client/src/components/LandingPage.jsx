import React from 'react'
import {Link} from 'react-router-dom';
import './LandingPage.css'


export default function LangingPage() {
  return (
    <div className='title'>
        <h1>Welcome to Pokepage</h1>
        <Link to={'/home'}>
            <button className='enter'>Enter</button>
        </Link>
    </div>
  )
}
