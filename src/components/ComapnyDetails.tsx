import { useParams } from 'react-router-dom'
import React, { ChangeEvent, useCallback } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { selectCompanyById } from '../store/companies/selectors'
import { calculateNumberOfCargoBays } from '../utils/calculations'
import { Actions, createUpdateBoxesAction } from '../store/companies/action/creators'
import colors from '../assets/colors'
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
    <Container className="details-company">
      {company ? (
        <>
          <h1 className="company-name"> {company.name}</h1>
          <span className="company-email">{company.email}</span>
          <div>
            <p className="cargo-boxes">CARGO BOXES</p>
            <TextInput value={company.boxes || ''} onChange={onChangeBoxesValue} />
          </div>
          <div>
            <p className="number-company"> Number of required cargo bays</p>
            <p className="number-boxes">{calculateNumberOfCargoBays(company.boxes)}</p>
          </div>
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
  align-items: flex-start;
  border-radius: 30px;
`

const TextInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid ${colors.lightGrey};
  border-radius: 4px;
  font-size: 16px;
  background-color: ${colors.white};
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 15px 15px;
`
