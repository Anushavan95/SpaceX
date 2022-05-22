import Types from './action/types'
import { Actions } from './action/creators'
import Company from '../../models/Company'

export default (state = initialState, action: Actions): State => {
  switch (action.type) {
    case Types.SET_COMPANIES:
      return { ...state, data: action.companies }
    case Types.UPDATE_QUERY:
      return { ...state, query: action.query }
    case Types.BURGER_MENU:
      return { ...state, burgerMenu: !state.burgerMenu }
    case Types.UPDATE_BOXES:
      return {
        ...state,
        data: state.data.map(company => (company.id === action.id ? { ...company, boxes: action.boxes } : company)),
      }
    default:
      return state
  }
}

export const initialState: State = {
  data: [],
  query: '',
  burgerMenu: false,
}

export interface State {
  data: Company[]
  query: string
  burgerMenu: boolean
}
