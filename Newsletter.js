import { CContainer } from '@coreui/react'
import { CRow } from '@coreui/react'
import { CCol } from '@coreui/react'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Newsletter = () => {
    return (
        <div>
            <CContainer className="con m-t-70 rounded-4">
            <CContainer>
  <CRow>
    <CCol>
        <p className='f-s-30 Arial f-w-300 m-l-40'>Suscribe Newsletter</p>
        <p className='Arial m-l-40'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam eum, qui cumque nam illum s</p>
    </CCol>
    <CCol>
   
        
      <InputGroup id='inp' className="mb-3  ">
        <Form.Control id="inp2"
          placeholder="Enter Your Email Address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button id="dis" className="dis">
          Discover 
        </Button>
      </InputGroup>
    </CCol>
  </CRow>
  </CContainer>
  
            </CContainer>
        </div>
    );
}

export default Newsletter;
