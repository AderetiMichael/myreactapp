import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
export default function Footer() {
  return (
    <MDBFooter bgColor='whit' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        
        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 style={{color: 'green', fontSize: '30px'}} className=' f-w-600 mb-4'>
                <MDBIcon  icon="gem" className="me-3 f" />
                Pizza.Hub
              </h6>
              <p className=''>
                Here you can use money to acquire your satisfaction content . Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase txt-blk mb-4 f-s-20 f-w-600'>CATEGORIES</h6>
              <p>
                <a href='#!' className='text-reset'>
                 Product Management
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Design / Creatives
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Education & Training
                </a>
              </p>
            
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase txt-blk f-w-600 mb-4 f-s-20'>About</h6>
              <p>
                <a href='#!' className='text-reset f-w-500'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Partnership
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Finance Experts
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase txt-blk f-w-600 mb-4 f-s-20'>Follow Us</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
               Facebook
              </p>
              <p>
                <MDBIcon icon="home" className="me-2" />
               Twitter
              </p>
              <p>
                <MDBIcon icon="home" className="me-2" />
              Instagram
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 ' style={{ backgroundColor: 'black', color: 'white', fontWeight: '600' }}>
        © 2021 Copyright:
        <a className='text-reset ' href='https://mdbootstrap.com/'>
          AR-Shakir & Adereti
        </a>
      </div>
    </MDBFooter>
  );
}