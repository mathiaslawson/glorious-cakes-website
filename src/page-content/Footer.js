import React from 'react'
import "./Footer.css"
import { Row, Container, Col} from "react-bootstrap"
import{ Form , Button, InputGroup, FormControl, FloatingLabel, ButtonToolbar, ButtonGroup} from "react-bootstrap"
import { AiFillFacebook, AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'
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
<br></br>
    <Button>Submit</Button>
  </FloatingLabel>
  
 
              </Col>

      
              <Col>

<div className='social-section'>
<Container>
       <h3 style={{fontSize: '1.2rem'}}>
       Connect with our social media
        <hr className='footer-line'></hr>
       </h3>
     </Container>
              <div className='footer-socials'>

              <ul className='footer-icons'>
                  <li>
                   <a href='https://www.facebook.com'>
                   <AiFillFacebook />
                   </a>
                 
                  </li>
                  <li>
                  <a href="https://api.whatsapp.com/send?phone=+233559690060&text=Hi There Glorious Cakes, I wish to order a cake." target="_blank">
                    <AiOutlineWhatsApp className='what'/></a>
                  </li>
                  <li> <a href='https://www.instagram.com'>
                    <AiOutlineInstagram className='insta'/></a>
                  </li>
                 
                </ul>          
         

              </div>
          
</div>
             

              </Col>
          </Row>
      </Container>
      </div>

    </>
  )
}
