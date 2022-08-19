import React from 'react'
import { Link } from 'react-router-dom'
import style from './NavBar.module.css'

export default function NavBar () {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.logo}>
          <Link to="/">
            <img src="./images/logo.svg" alt="Logo" />
          </Link>
        </div>
        <ul className={style.groupNavLink}>
          <li className={style.navLink}><Link to='/games' >Games</Link></li>
          <li className={style.navLink}><Link to='/upload' >Upload</Link></li>
          <li className={style.navLink}><Link to='/' >About</Link></li>
        </ul>
      </nav>
    </header>
  )
}
