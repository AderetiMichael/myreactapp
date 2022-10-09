import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import chicken from "./img/chicken.png"

function ResponsiveAutoExample() {
  return (
    <Container className='m-t-90'>
      <Row>
        <Col sm={4}>
            <p className='f-s-20 pink f-w-400'>NOW TAKING ONLINE ORDERS</p>
            <span className=' f-s-80 ff f-w-600'>Salmon</span>
            <p className="f-w-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ipsum pariatur nihil autem asperiores expedita perferendis quas qui nostrum enim beatae non s
            unt, cumque eligendi labore magni nemo distinctio dolore!</p>
            <Button  size="lg" variant="success">Add to cart</Button>{' '}
      <Button  size="lg" variant="secondary">Book a table</Button>{' '}
      <Container className='m-t-50'>
      <Row>
        <Col>
            <p className='f-w-500 f-s-30'>Lunch</p>
            <span className='f-w-600 m-b-40 time '>1:00-3:00pm</span>
        </Col>
        <Col>
            <p className='f-w-500 f-s-30'>Dinner</p>
            <span className=' f-w-600 m-b-40 time'>7:00-10:00pm</span>
        </Col>
      </Row>
      </Container>
 

           
      
        </Col>
        <Col sm={8}>
            <img className='vs' alt='chicken' width={700} src={chicken} />
        </Col>
        </Row>
    </Container>
  );
}
      export default ResponsiveAutoExample;