import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import companies, { State as ComapiesState, initialState as companiesInitialState } from './companies'

export interface RootState {
  companies: ComapiesState
}

export const initialState: RootState = {
  companies: companiesInitialState,
}

const rootReducer = combineReducers({
  companies,
})

const store = createStore<RootState, any, any, any>(rootReducer, applyMiddleware(thunk))

export default store
