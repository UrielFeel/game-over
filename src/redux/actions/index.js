import { CLEAR_GAMES, GET_ALL_GAMES } from './types'

const endPoint = 'http://localhost:3001'

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
