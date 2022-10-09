import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ham from "./img/OIP.jpg"
import Button from 'react-bootstrap/Button';
import grill from "./img/grill.jpg"

function ResponsiveAtoExample() {
  return (
    <Container className='m-t-40'>
    
    <div className="lh">
<p className="m-t-40 jus text-center f-w-600 f-s-30 de ">DEALS</p>
<p className="ff  f-w-600 f-s-40 text-center lh-2">OUR BEST DEALS</p>
</div>
      <Row>
        <Col  sm={8}>
            <img className='img-fluid neo vs  m-t-1o' alt='hamburger' src={ham} />
            
            <p className='bur f-w-600 f-s-30 m-t-20'>Stick For Steaks</p>
            
        </Col>
        <Col className='' sm={4}>
        <div >
            <p className='bur f-w-600 f-s-30'>Pretty Big Burger</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetu
            r aperiam, distinctio nihil id, repellat, porro delectus asperiores modi ipsa suscipit optio corporis eveni
            et sed! Modi suscipit quod aut vel amet.</p>
            <Button  variant="success" size="lg">
          Add to Cart  
        </Button>{' '}
           </div>
           <img alt='grilled meat'
            className='grill'
             src={grill} />
        </Col>
      </Row>
      
    </Container>
  );
}

export default ResponsiveAtoExample;