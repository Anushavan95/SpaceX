import Company from '../../../models/Company'
import Types from './types'

export type Actions =
  | { type: Types.SET_COMPANIES; companies: Company[] }
  | { type: Types.UPDATE_BOXES; id: string; boxes: string }
  | { type: Types.UPDATE_QUERY; query: string }

export const createSetCompaniesAction = (companies: Company[]): Actions => ({
  type: Types.SET_COMPANIES,
  companies,
})
export const createUpdateQueryAction = (query: string): Actions => ({
  type: Types.UPDATE_QUERY,
  query,
})
export const createUpdateBoxesAction = (id: string, boxes: string): Actions => ({
  type: Types.UPDATE_BOXES,
  id,
  boxes,
})
