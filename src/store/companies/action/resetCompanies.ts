import { Dispatch } from 'redux'
import companies from '../../../data/companies.json'
import { createSetCompaniesAction } from './creators'
import { storageRemoveCompanies } from '../../../utils/storage'

export default () => (dispatch: Dispatch): void => {
  storageRemoveCompanies()
  dispatch(createSetCompaniesAction(companies))
}
