import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import "./about.css"

export default function about() {
  return (
   <>
   <div  className='about-container'>

   <Container>
       <h3 className='about-heading'>
       About Glorious Cakes
       </h3>
     </Container>

      <Container fluid="md">
          <Row>
              <Col>
             
              <img className='' src='./images/logo1.png' alt=""  style={{width: "60%",  paddingTop: "3rem"}}>
    </img>
              </Col>


              <Col>
              <div className='about-writings'>
             <strong>GLORIOUS CAKES</strong><br></br>
              We are a catering service witn an eye for quality, value for money and timely delivery.

              We are into cake making and catering services. We teach and take orders for any occasions, be it wedding, cocktail parties, co.operate meetings, naming ceremonies, funeral, surprise birthdays and many more. 
              <br></br>
              Just give us a call and we will make it GLORIOUS.
<br></br>
              <strong>Note</strong>
              <ul>
                <li>Payment validates order</li>
                <li>46 hours will be much appreciated</li>
                <li>Emergency orders will attract an emergency fee</li>
                <li>Edible prints (Picture cakes) or cartoon characters attract extra costs</li>
              </ul>


               

              </div>
          

              </Col>
          </Row>
      </Container>

   </div>
   
   
   </>
  )
}
