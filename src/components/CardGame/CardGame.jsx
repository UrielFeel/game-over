/* eslint-disable react/prop-types */
import React from 'react'
import style from './CardGames.module.css'
import { BsStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function CardGame ({ id, name, image, rating, genres }) {
  return (
    <div className={style.card}>
      <figure className={style.figure}>
        <img src={image} alt={name} />
      </figure>

      <div className={style.content}>
        <h3>{name}</h3>
        <div className={style.genres}>
          {
            genres?.map(genre => <span key={genre.id}>{genre.name}</span>)
          }
        </div>
        <p className={style.rating}><BsStarFill />{rating}</p>
      </div>

      <div className={style.btnContainer}>
        <Link to={`/${id}`}>
          <div className='btn'>Info</div>
        </Link>
      </div>

    </div>
  )
}
