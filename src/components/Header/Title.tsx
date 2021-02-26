import React from 'react'
import styled from 'styled-components'

const Title: React.FunctionComponent = () => {
  return (
    <Container>
      <h1>SpaceX Cargo</h1>
    </Container>
  )
}

export default Title

const Container = styled.div`
  display: flex;
  flex: 1;
`
