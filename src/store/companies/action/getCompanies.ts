import { Actions, createSetCompaniesAction } from './creators'
import { storageGetCompanies } from '../../../utils/storage'
import resetCompanies from './resetCompanies'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../../index'

const getCompanies = () => (dispatch: ThunkDispatch<RootState, unknown, Actions>): void => {
  const serializedData = storageGetCompanies()
  if (serializedData) {
    const deserializedCompanies = JSON.parse(serializedData)
    dispatch(createSetCompaniesAction(deserializedCompanies))
  } else {
    dispatch(resetCompanies())
  }
}

export default getCompanies
