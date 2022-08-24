import React from 'react'
import { useDispatch } from 'react-redux'
import { sortGames } from '../../redux/actions'
import style from './SearchFilterSort.module.css'

export default function Sort () {
  const dispatch = useDispatch()

  const handleSelectSort = (e) => {
    dispatch(sortGames(e.target.value))
  }
  return (
    <select className={style.select} defaultValue='default' onChange={handleSelectSort}>
      <option disabled={true} value='default'>Sort by</option>
      <option value='A-Z'>A-Z</option>
      <option value='Z-A'>Z-A</option>
      <optgroup label='Rating' />
      <option value='high'>High to Low</option>
      <option value='low'>Low to High</option>
    </select>
  )
}
