import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import colors from '../assets/colors'
import { useSelector } from 'react-redux'
import { selectBurgerMenu, selectCompanies, selectQueries } from '../store/companies/selectors'

const CompaniesList: React.FunctionComponent = () => {
  const companies = useSelector(selectCompanies)
  const showList = useSelector(selectBurgerMenu)
  const query = useSelector(selectQueries)
  return (
    <>
      <Container className={`list-companies ${showList ? 'showListMenu' : ''}`}>
        <h3 className="title-list">Shipment List</h3>
        {companies
          .filter(company => company.name.toLowerCase().includes(query.toLowerCase()))
          .map(({ id, name }) => (
            <li key={id} className="companies-list">
              <NavLink to={`/companies/${id}`}>{name}</NavLink>
            </li>
          ))}
      </Container>
    </>
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
  padding: 0px 40px 40px 40px;
  grid-gap: 12px;
  max-width: 360px;
  width: 100%;
`
