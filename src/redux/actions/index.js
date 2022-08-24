import { CLEAR_GAMES, GET_ALL_GAMES, SORT_GAMES } from './types'

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
