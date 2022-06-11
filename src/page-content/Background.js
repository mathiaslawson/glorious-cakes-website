import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

export default function Background() {
  return (
   <>

   
         <style type="text/css">
             {`

             hr{
                 transform: translate(1%, 50%);
             }



    .custitle{
        position: fixed;
        top: 15rem;
        left: 57rem;
        color: rbg(53, 57, 53);
        z-index: 1;
        font-size: 5rem;
        font-family: futura;
     }

      .cusbg{
          height: 700px;
          background-color: yellow;
              }

              .cusbut{
                transform: translate(50%, 0%);
              }
         @media screen and (min-width: 360px) and (orientation: portrait){
             .cusbg{
                height: 300px;
             } 
             .custitle{
                position: fixed;
                top: 7rem;
                left: 13rem;
                 color: rbg(53, 57, 52);
                z-index: 1;
                // color: white;
                font-size: 1.5rem;
                font-family: futura;
                
            }

            }
             
             @media screen and (min-width: 820px) and (orientation: portrait){
                .cusbg{
                   height: 420px; 
                } 

                .custitle{
                    position: fixed;
                    top: 8rem;
                    left: 28rem;
                    color: rbg(53, 57, 53);
                    z-index: 1;
                    font-size: 3rem;
                } }

                @media screen and (min-width: 768px) and (orientation: portrait){
                    .cusbg{
                       height: 420px; 
                    } 
    
                    .custitle{
                        position: fixed;
                        top: 8rem;
                        left: 28rem;
                        color: rbg(53, 57, 53);
                        z-index: 1;
                        font-size: 3rem;
                    } }

                
         }               
             `}
             
             
             </style>   

             <Container>
                 <Row>
                     <Col> <h2 className='custitle'>Glorious Cakes
                     <hr></hr>
                     <Button  variant="dark" className="cusbut">Contact Us Now!</Button>{' '}
                     </h2>                     
                     
                     </Col>

                 </Row>
                 </Container>        
  
         <img className='cusbg' src='./images/gc2.png' alt=""  style={{width: "100%", position: "absolute", top: "3rem"}}></img>
  
     
 
     
   </>

   

   
  )
}
