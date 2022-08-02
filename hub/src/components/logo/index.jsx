import logo from '../assets/Logo.png'

import React from 'react'
import { Container } from './style'

const Logo = () => {
  return (
    <>
        <Container>
        <img src={logo} alt="Kenzie Hub" />
        </Container>
    </>
  )
}

export default Logo