import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import { Nav, Navbar  } from 'react-bootstrap'
import Background from './Background'



export default function header() {
  return (
    <>
       <Navbar bg="warning" variant="dark">
    <Container>
    <Navbar.Brand href="#home">GloriousCakes</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  
    </>



  )
}
