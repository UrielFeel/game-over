/* eslint-disable react/prop-types */
import React from 'react'
import style from './Pagination.module.css'

export default function Pagination ({ currentPage, maxPage, next, prev }) {
  return (
    <div className={style.paginatorContainer}>
      <button onClick={prev} className='btn'>Prev</button>
      <span>{currentPage}/{maxPage}</span>
      <button onClick={next} className='btn'>Next</button>
    </div>
  )
}
