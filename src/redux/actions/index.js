import { CLEAR_GAMES, FILTER_GAMES, GET_ALL_GAMES, GET_GENRES, SORT_GAMES } from './types'

const endPoint = 'https://urielfeel-videogames.herokuapp.com'

export function getAllGames () {
  return async function (dispatch) {
    const res = await fetch(`${endPoint}/videogames`)
    const data = await res.json()
    return dispatch({
      type: GET_ALL_GAMES,
      payload: data
    })
  }
}

export function clearGames () {
  return ({
    type: CLEAR_GAMES
  })
}

export function sortGames (option) {
  return ({
    type: SORT_GAMES,
    payload: option
  })
}

export function getGenres () {
  return async function (dispatch) {
    const res = await fetch(`${endPoint}/genres`)
    const data = await res.json()
    return dispatch({
      type: GET_GENRES,
      payload: data
    })
  }
}

export function filterGames (option) {
  return ({
    type: FILTER_GAMES,
    payload: option
  })
}
