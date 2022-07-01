import React from 'react'
import { Container } from 'react-bootstrap'
import { Nav, Navbar  } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function header() {
  return (
    <>
    <div>
        <Navbar bg="warning" variant="dark" >
    <Container>
      <Link to="/" style={{textDecoration: "none"}}>
      <Navbar.Brand href="#home">GloriousCakes</Navbar.Brand>
      </Link>
    <Nav className="me-auto">
<Link to="/" style={{textDecoration: "none"}}>
<Nav.Link href="#home">Home</Nav.Link>
</Link>    
      <Link to="/gallery" style={{textDecoration: "none"}}>
      <Nav.Link href="#features">Gallery</Nav.Link>
      </Link>
  <Link to="/about" style={{textDecoration: "none"}}>
  <Nav.Link href="#pricing">About</Nav.Link>
  </Link>
    </Nav>
    </Container>
  </Navbar>
      
    </div>
     

  
    </>



  )
}
