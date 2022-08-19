import React from 'react'
import { Link } from 'react-router-dom'
import style from './Landing.module.css'

export default function Landing () {
  return (
    <main className='container'>
      <section className={style.heroContainer}>

        <figure className={style.imageContainer}>
          <img src="/images/hero.svg" alt="Hero image" />
        </figure>

        <div className={style.heroText}>
          <h1 className='title-retro'>Welcome!</h1>
          <p>Aquí encontrarás el listado más completo de videojuegos de todas las plataformas. ¿Buscas información, novedades o si merece la pena comprar algún título en concreto? En esta página encontrarás recopilados todos los juegos que han salido al mercado o que van a salir en un futuro.</p>
          <Link to='/games'>
            <button className={style.startBtn}>
              Start
            </button>
          </Link>
        </div>

      </section>

    </main>
  )
}
