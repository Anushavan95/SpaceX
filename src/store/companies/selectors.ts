import { RootState } from '../index'
import Company from '../../models/Company'

export const selectCompanies = (state: RootState): Company[] => state.companies.data
export const selectBurgerMenu = (state: RootState): boolean => state.companies.burgerMenu
export const selectQueries = (state: RootState): string => state.companies.query
export const selectCompanyById =
  (id: string) =>
  (state: RootState): Company | undefined =>
    state.companies.data.find(company => company.id === id)
