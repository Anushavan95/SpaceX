import { useParams } from 'react-router-dom'
import React, { ChangeEvent, useCallback } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { selectCompanyById } from '../store/companies/selectors'
import { calculateNumberOfCargoBays } from '../utils/calculations'
import { Actions, createUpdateBoxesAction } from '../store/companies/action/creators'

interface ParamType {
  id: string
}

const CompaniesDetails: React.FunctionComponent = () => {
  const { id } = useParams<ParamType>()
  const dispatch = useDispatch()
  const company = useSelector(selectCompanyById(id))
  const onChangeBoxesValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>): Actions => dispatch(createUpdateBoxesAction(id, event.target.value)),
    [dispatch, id]
  )
  return (
    <Container>
      {company ? (
        <>
          <div>name: {company.name}</div>
          <div>email: {company.email}</div>
          <div>
            boxes: <input value={company.boxes || ''} onChange={onChangeBoxesValue} />
          </div>
          <div>Number of reqired cargos bays: {calculateNumberOfCargoBays(company.boxes)}</div>
        </>
      ) : (
        <div>Please select a company</div>
      )}
    </Container>
  )
}

export default CompaniesDetails

const Container = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  padding: 30px;
`
