/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { filterGames, getGenres } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import style from './SearchFilterSort.module.css'

export default function Filter ({ jump }) {
  const dispatch = useDispatch()
  const genres = useSelector(state => state.genres)
  useEffect(() => {
    dispatch(getGenres())
  }, [])

  const handleFilter = (e) => {
    dispatch(filterGames(e.target.value))
    jump(1)
  }

  return (
    <select className={style.select} defaultValue='default' onChange={handleFilter}>
      <option disabled={true} value='default'>Filter</option>
      <option value="0">All</option>
      {
        genres?.map(({ id, name }) => {
          return (
            <option key={id} value={id}>{name}</option>
          )
        })
      }
    </select>
  )
}
