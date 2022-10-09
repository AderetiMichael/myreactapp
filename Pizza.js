
import pizza from "./img/pizza.png"
import rate from "./img/rate.png"
import Button from 'react-bootstrap/Button'
import { CContainer } from '@coreui/react'
import { CRow } from '@coreui/react'
import { CCol } from '@coreui/react'
import React from 'react'

const Pizza = () => {
  return (
    <div>
      <CContainer className="overflow-hidden m-t-50">
  <CRow className='m-t-30' xs={{ gutterY: 4 }}>
    <CCol className="" xs={{ span: 4 }}>
      <div className="p-3 border rounded-3 neo2">
      <img alt="pizza" className='pizza mx-auto d-block'src={pizza} />
              <img className='rate mx-auto d-block' alt="pizza" src={rate} />
              <p className='serif text-center f-w-600 f-s-30'>Chesse Pizza</p>
              <p className='Arial text-center f-w-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolores obcaecati</p>
              <Button className='mx-auto d-block m-b-20' variant="success" size="lg">
            Add to Cart  | $495
          </Button>{' '}
      </div>
    </CCol>
    <CCol xs={{ span: 4 }}>
      <div className="p-3 border bg-light rounded-3">
      <img className='pizza mx-auto d-block' alt="pizza"src={pizza} />
              <img alt="rate" className='rate mx-auto d-block' src={rate} />
              <p className='serif text-center f-w-600 f-s-30'>Pepperoni Pizza</p>
              <p className='Arial text-center f-w-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolores obcaecati</p>
              <Button className='mx-auto d-block m-b-20' variant="success" size="lg">
            Add to Cart  | $495
          </Button>{' '}
      </div>
    </CCol>
    <CCol xs={{ span: 4 }}>
      <div className="p-3 border rounded-3 bg-light">
      <img alt="pizza" className='pizza mx-auto d-block'src={pizza} />
              <img alt="pizza" className='rate mx-auto d-block' src={rate} />
              <p className='serif text-center f-w-600 f-s-30'>Chesse Pizza</p>
              <p className='Arial text-center f-w-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolores obcaecati</p>
              <Button className='mx-auto d-block m-b-20' variant="success" size="lg">
            Add to Cart  | $495
          </Button>{' '}
      </div>
    </CCol>
    
  </CRow>
</CContainer>
    </div>
  );
}

export default Pizza;
