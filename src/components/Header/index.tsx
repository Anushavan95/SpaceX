import React from 'react'
import Title from './Title'
import Search from './Search'
import styled from 'styled-components'
import colors from '../../assets/colors'

const Header: React.FunctionComponent = () => {
  return (
    <Container className="header">
      <Title />
      <Search />
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.pink};
`
