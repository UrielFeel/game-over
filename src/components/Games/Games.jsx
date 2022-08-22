import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { clearGames, getAllGames } from '../../redux/actions'
import CardGame from '../CardGame/CardGame'
import style from './Games.module.css'

export default function Games () {
  const games = useSelector(state => state.games)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllGames())
    // setTimeout(() => {
    // }, 2000)

    return () => {
      dispatch(clearGames())
    }
  }, [])

  return (
    <main className='container'>
      <section className={style.gamesContainer}>
        {
          games.map(({ id, name, released, image, rating, genres, platforms }) => {
            return (
              <CardGame
                key={id}
                id={id}
                name={name}
                released={released}
                image={image}
                rating={rating}
                genres={genres}
                platforms={platforms}
              />
            )
          })
        }
      </section>

    </main>
  )
}
