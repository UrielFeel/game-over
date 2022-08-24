import { CLEAR_GAMES, FILTER_GAMES, GET_ALL_GAMES, GET_GENRES, SORT_GAMES } from '../actions/types'

const initialState = {
  games: [],
  AllGames: [], // aux para filtrar
  genres: []
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

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload.sort((a, b) => {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        })
      }

    case FILTER_GAMES: {
      const filteredGames = state.AllGames.filter(game => game.genres.some(genre => Number(genre.id) === Number(action.payload)))
      return {
        ...state,
        games: Number(action.payload) === 0
          ? state.AllGames
          : filteredGames.length === 0 ? [{ results: 0 }] : filteredGames
      }
    }

    default:
      return state
  }
}
