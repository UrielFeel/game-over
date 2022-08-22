import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { clearGames, getAllGames } from '../../redux/actions'
import CardGame from '../CardGame/CardGame'
import Pagination from '../Pagination/Pagination'
import style from './Games.module.css'
import usePagination from '../../hooks/usePagination'

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

  const {
    currentPage,
    currentData,
    maxPage,
    next,
    prev
    // jump
  } = usePagination(games, 6)

  return (
    <main className='container'>
      <section className={style.gamesContainer}>
        {
          currentData().map(({ id, name, released, image, rating, genres, platforms }) => {
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
      <Pagination
        currentPage={currentPage}
        maxPage={maxPage}
        next={next}
        prev={prev}
      />

    </main>
  )
}
