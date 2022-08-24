import { CLEAR_GAMES, GET_ALL_GAMES, SORT_GAMES } from '../actions/types'

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

    case SORT_GAMES: {
      const gamesSorted = [...state.games].sort((a, b) => {
        if (action.payload === 'A-Z') {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        }
        if (action.payload === 'Z-A') {
          if (a.name > b.name) return -1
          if (a.name < b.name) return 1
          return 0
        }
        if (action.payload === 'low') {
          return a.rating >= b.rating ? 1 : -1
        }
        if (action.payload === 'high') {
          return a.rating <= b.rating ? 1 : -1
        }
        return 0
      })
      return {
        ...state,
        games: gamesSorted
      }
    }

    default:
      return state
  }
}
