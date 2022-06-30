import React from 'react'
import "./Footer.css"
import { Row, Container, Col} from "react-bootstrap"
import{ Form , Button, InputGroup, FormControl, FloatingLabel, ButtonToolbar, ButtonGroup} from "react-bootstrap"
export default function Footer() {
  return (
    <>
    
    <img className='cusfooterbg' src='./images/footerimg.png' alt=""  style={{width: "100%"}}>
      
    </img>
      
      <div className="footer-content">

     <Container>
       <h3>
        We'd Love to hear from You
        <hr className='footer-line'></hr>
       </h3>
     </Container>

      <Container fluid="md">
          <Row>
              <Col>
             
                <Form.Group>
                  <Form.Label>
                    Email
                  </Form.Label>
                  <InputGroup className="mb-3">
    <FormControl
      placeholder="Email"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
  </InputGroup>

                </Form.Group>
  

 
    <Form.Label>Message</Form.Label>
    <FloatingLabel controlId="floatingTextarea2" label="Type in your enquires ...">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  
 
              </Col>


              <Col>
              <div className='footer-socials'>

                   
              <ButtonToolbar aria-label="Toolbar with button groups">
  <ButtonGroup className="me-2" aria-label="First group">
    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
  </ButtonGroup>
  <ButtonGroup className="me-2" aria-label="Second group">
    <Button>5</Button> <Button>6</Button> <Button>7</Button>
  </ButtonGroup>
</ButtonToolbar>

              </div>
          

              </Col>
          </Row>
      </Container>
      </div>

    </>
  )
}
