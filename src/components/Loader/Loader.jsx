import React from 'react'
import { PacmanLoader } from 'react-spinners'
import style from './Loader.module.css'
export default function Loader () {
  return (
    <div className={style.loader}>
      <h1 className='title-retro'>Loading...</h1>
      <div>
        <PacmanLoader size={50} color="#edb100" />
      </div>
    </div>
  )
}
