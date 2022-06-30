import React from 'react'
import { Row, Col, Container} from 'react-bootstrap'
import "./Maing.css"
import { Link } from 'react-router-dom'


export default function Maing() {
  return (
    <>

<div className='page-heading'>
  
<h1 className='heading-word'>Gallery</h1>
<hr className='heading-line'></hr> 
</div>


   <div className='grid'>
   <Container fluid="lg">
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col  sm="5" >
   <Link to="/home">
   <img className='' src='./images/2Tprime.jpg' alt=""  style={{width: "100%"}}>
    </img>
   </Link>
    </Col>

    <Col  sm="5" >
   <Link to="/home">
   <img className='' src='./images/2Tprime.jpg' alt=""  style={{width: "100%"}}>
    </img>
   </Link>
    </Col>

    <Col sm="5">
   <Link to="/home">
   <img className='' src='./images/comb.webp' alt=""  style={{width: "100%", paddingTop: "3rem"}}>
    </img>
   </Link>
    </Col>
    <Col xs={7}> 
   <img className='' src='./images/sprin7.jpg' alt=""  style={{width: "100%", paddingLeft: "-9px", paddingTop: "1rem"}}>
    </img>
  
    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row>
    <Col sm="4">
    <img className='' src='./images/sprin5.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
    </Col>
    <Col >
    <img className='' src='./images/sprin6.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
    </Col>
    <Col >
    <img className='' src='./images/sprin4.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
    <Col xs={6}>
    <img className='' src='./images/sprin2.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
       </Col>
    <Col xs={6}> <img className='' src='./images/sprin.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
     </Col>
  </Row>

  <Row>
    <Col sm="4">
    <img className='' src='./images/sprin5.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
    </Col>
    <Col >
    <img className='' src='./images/sprin6.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
    </Col>
    <Col >
    <img className='' src='./images/sprin4.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
    <Col xs={6}>
    <img className='' src='./images/sprin2.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
       </Col>
    <Col xs={6}> <img className='' src='./images/sprin.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
     </Col>
  </Row>

  <Row>
    <Col sm="4">
    <img className='' src='./images/sprin5.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
    </Col>
    <Col >
    <img className='' src='./images/sprin6.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
    </Col>
    <Col >
    <img className='' src='./images/sprin4.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
    <Col xs={6}>
    <img className='' src='./images/sprin2.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
       </Col>
    <Col xs={6}> <img className='' src='./images/sprin.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
     </Col>
  </Row>

  <Row>
    <Col sm="4">
    <img className='' src='./images/sprin5.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
    </Col>
    <Col >
    <img className='' src='./images/sprin6.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
    </Col>
    <Col >
    <img className='' src='./images/sprin4.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
    <Col xs={6}>
    <img className='' src='./images/sprin2.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
       </Col>
    <Col xs={6}> <img className='' src='./images/sprin.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
     </Col>
  </Row>

  <Row>
    <Col sm="4">
    <img className='' src='./images/sprin5.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
    </Col>
    <Col >
    <img className='' src='./images/sprin6.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
    </Col>
    <Col >
    <img className='' src='./images/sprin4.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
    <Col xs={6}>
    <img className='' src='./images/sprin2.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
       </Col>
    <Col xs={6}> <img className='' src='./images/sprin.jpg' alt=""  style={{width: "100%", paddingTop: "1rem"}}>
    </img>
     </Col>
  </Row>
</Container>
  
   </div>
  
    
    </>
  )
}

