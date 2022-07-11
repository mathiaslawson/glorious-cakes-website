import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import "./Background.css"

export default function Background() {
  return (
   <> 
             <Container>
                 <Row>
                     <Col> <h2 className='custitle' >Glorious Cakes
                     <hr className='cushori'></hr>
                     <Button variant="dark" className="cusbut"  href="#" >Contact Us Now</Button>{' '}
                     </h2>                     
                     
                     </Col>

                 </Row>
                 </Container>        
  
         <img className='cusbg' src='./images/gc2.png' alt=""  style={{width: "100%", position: "absolute"}}></img>
  
     
 
     
   </>

   

   
  )
}
