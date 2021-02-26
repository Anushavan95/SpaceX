import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import resetCompanies from '../../store/companies/action/resetCompanies'
import saveCompanies from '../../store/companies/action/saveCompanies'
import colors from '../../assets/colors'

const ActionButtons: React.FunctionComponent = () => {
  const dispatch = useDispatch()
  const onClickLoad = useCallback(() => dispatch(resetCompanies()), [dispatch])
  const onClickSave = useCallback(() => dispatch(saveCompanies()), [dispatch])
  return (
    <Container>
      <Button onClick={onClickLoad}>load</Button>
      <Button onClick={onClickSave}>save</Button>
    </Container>
  )
}

export default ActionButtons

const Container = styled.div`
  display: flex;
  flex: 1;
`
const Button = styled.button`
  position: relative;
  background-color: ${colors.darkPink};
  border: 2px solid ${colors.lightGrey};
  border-radius: 4px;
  font-size: 20px;
  color: ${colors.white};
  padding: 10px;
  width: 100px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
`
