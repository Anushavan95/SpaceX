import React, { ChangeEvent, useCallback } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Actions, createUpdateQueryAction } from '../../store/companies/action/creators'
import colors from '../../assets/colors'

const Search: React.FunctionComponent = () => {
  const dispatch = useDispatch()
  const onChangeQuery = useCallback(
    (event: ChangeEvent<HTMLInputElement>): Actions => dispatch(createUpdateQueryAction(event.target.value)),
    [dispatch]
  )
  return (
    <Container>
      <TextInput onChange={onChangeQuery} placeholder="Search" />
    </Container>
  )
}

export default Search

const Container = styled.div`
  display: flex;
  flex: 1;
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
  padding: 12px 20px 12px 40px;
`
