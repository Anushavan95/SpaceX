import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Logo from '../../assets/images/logo.png'
import { Actions, handleClickOpenModal } from '../../store/companies/action/creators'
import { selectBurgerMenu } from '../../store/companies/selectors'

const Title: React.FunctionComponent = () => {
  const burger = useSelector(selectBurgerMenu)
  console.log(burger, 'burger')
  const dispatch = useDispatch()

  const handleToggleModal = useCallback((): Actions => dispatch(handleClickOpenModal(burger)), [dispatch])
  return (
    <Container className="logo-header">
      <img src={Logo} alt={'Logo'} />
      <div className={`burger ${burger ? 'openMenu' : ''}`} onClick={handleToggleModal}>
        <div className="line"></div>
      </div>
    </Container>
  )
}

export default Title

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 40px 20px 40px 40px;
`
