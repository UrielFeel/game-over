/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from 'react-redux'
import { clearGames, getAllGames } from '../../redux/actions'
import { FaSearch } from 'react-icons/fa'
import style from './SearchFilterSort.module.css'

export default function Search ({ jump }) {
  const dispatch = useDispatch()

  const onSearch = (e) => {
    dispatch(clearGames())
    e.preventDefault()

    alert('buscando: ' + e.target[0].value)

    dispatch(getAllGames())
    // dispatch(getGamesBySearch(e.target[0].value))

    jump(1)
    e.target[0].value = ''
  }
  return (
    <form className={style.searchBar} onSubmit={onSearch}>
      <input type="text" className={style.searchImput} placeholder='Search Games' />
      <button className='btn'><FaSearch /></button>
    </form>
  )
}
