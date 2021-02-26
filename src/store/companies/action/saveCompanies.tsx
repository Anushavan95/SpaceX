import { Dispatch } from 'redux'
import { storageSetCompanies } from '../../../utils/storage'
import { RootState } from '../../index'

const saveCompanies = () => (dispatch: Dispatch, getState: () => RootState): void => {
  const serializedData = JSON.stringify(getState().companies.data)
  storageSetCompanies(serializedData)
}

export default saveCompanies
