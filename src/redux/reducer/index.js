import { CLEAR_GAMES, GET_ALL_GAMES } from '../actions/types'

const initialState = {
  games: [],
  AllGames: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GAMES:
      return ({
        ...state,
        games: action.payload,
        AllGames: action.payload
      })

    case CLEAR_GAMES:
      return ({
        ...state,
        AllGames: [],
        games: []
      })

    default:
      return state
  }
}
