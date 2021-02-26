import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import colors from '../assets/colors'
import { useSelector } from 'react-redux'
import { selectCompanies, selectQueries } from '../store/companies/selectors'

const CompaniesList: React.FunctionComponent = () => {
  const companies = useSelector(selectCompanies)
  const query = useSelector(selectQueries)
  return (
    <Container>
      {companies
        .filter(company => company.name.toLowerCase().includes(query.toLowerCase()))
        .map(({ id, name }) => (
          <li key={id}>
            <StyledLink to={`/companies/${id}`}>{name}</StyledLink>
          </li>
        ))}
    </Container>
  )
}

export default CompaniesList

const Container = styled.ul`
  display: flex;
  flex: 1;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: ${colors.milk};
  height: 100%;
  flex-direction: column;
  overflow: auto;
`

const StyledLink = styled(Link)`
  display: block;
  color: ${colors.black};
  padding: 8px 16px;
  text-decoration: none;
  &:hover:not {
    background-color: ${colors.grey};
    color: ${colors.white};
  }
`
