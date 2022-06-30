import React from 'react'
import { Container, Card, Button, Col, Row } from 'react-bootstrap'
import "./Submenu.css"
import { Link } from "react-router-dom";


export default function Submenu() {
  return (
    <div>
   
<br></br> <br></br>

<br></br>


<br></br><br></br><br></br><br></br><br></br>
        <Container fluid="md">
        <h2 className='welcome' style={{color: "bisque"}}>Welcome to Glorious Cakes</h2>      
        <hr  style={{color: "bisque"}}></hr> 

        <br></br>
        <br></br><br></br>
        <br></br> 

        
 <div className='gridmenu'>

<Container fluid="xxl" style={{color: "black"}}>
      <Row>
        <Col xs><Card style={{ width: '18rem' }} bg='warning'>
      <Card.Img variant="top" src="./images/gc2.png" />
      <Card.Body>
        <Card.Title>Glorious Cakes Gallery</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      <Link to="/gallery">
      <Button variant="primary">Gallery</Button>
      </Link>
      
       
       
      </Card.Body>
    </Card>
    </Col>

    <br></br>

        <Col xs={{ order: 12 }} className='secondcol'>
        <Card style={{ width: '18rem' }} bg='warning'>
      <Card.Img variant="top" src="./images/gc1.png" />
      <Card.Body>
        <Card.Title>Buy From Glorious Cakes</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
        </Col>


        <Col xs={{ order: 1 }}><Card style={{ width: '18rem' }} bg='warning' className='thirdcol'>
      <Card.Img variant="top" src="./images/gc2.png" />
      <Card.Body>
        <Card.Title>About Glorious Cakes</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">About</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>

</div>


    
            </Container> 
 <br></br>
        <br></br><br></br>
       <br></br><br></br><br></br><br></br><br></br>

{/* Starting of Gallery and Pricing */}

        <Container style={{color: "black"}}>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col xs={12} md={8} >
    <Card.Img variant="top" src="./images/2Tprime.jpg" />
 <Card  bg='warning'>
 <Card.Body >
        <Card.Title >Two Tier Wedding Cake</Card.Title>
        <Card.Text>
        <strong>
        6" & 8"
          </strong> 
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
 </Card>
   
  
     
    </Col>
    <Col xs={6} md={4}>
      <Card bg='warning'>
      <Card.Img variant="top" src="./images/gc2.png" />
      <Card.Body>
        <Card.Title>Three Tier Wedding Cake</Card.Title>
        <Card.Text>
       <strong>
        <pre>
        6" 8" & 10"
        <br></br>
        6" (8" dummy) 10"       
          </pre></strong> 
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
      </Card>
   
    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row>
    <Col xs={6} md={4}>
      <Card  bg='warning' style={{marginTop: "1rem"}}>
      <Card.Img variant="top" src="./images/4T.jpg" />
      <Card.Body>
        <Card.Title>Four Tier Wedding Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Visit Gallery</Button>
      </Card.Body>
      </Card>
   
    </Col>
    <Col xs={6} md={4}>
      <Card bg='warning' style={{marginTop:"7rem"}}>
      <Card.Img variant="top" src="./images/gc2.png" />
      <Card.Body>
        <Card.Title>Cream Cakes</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Visit Gallery</Button>
      </Card.Body>
      </Card>
   
    </Col>
    <Col xs={6} md={4}>
      <Card bg='warning'>

      <Card.Img variant="top" src="./images/BD.jpg" />
      <Card.Body>
        <Card.Title>Fountain Birthday Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Visit Gallery</Button>
      </Card.Body>
      </Card>
   
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
    <Col xs={6}>
      <Card bg='warning' style={{marginTop:"2rem"}}>
      <Card.Img variant="top" src="./images/gc2.png" />
      <Card.Body>
        <Card.Title>Rectangular Small</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Gallery</Button>
      </Card.Body>
      </Card>
   
       </Col>
    <Col xs={6}><Card.Img variant="top" src="./images/gc2.png" />
    <Card bg='warning'>
    <Card.Body>
        <Card.Title>Five Tier Wedding Cake</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Gallery</Button>
      </Card.Body>
    </Card>
     </Col>
  </Row>
</Container>


</div>

  )


}
