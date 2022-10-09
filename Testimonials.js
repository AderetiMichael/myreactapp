
import { CContainer } from '@coreui/react'
import { CRow } from '@coreui/react'
import { CCol } from '@coreui/react'
const Testimonials = () => {
  return (
    <div>
    
    <CContainer fluid className='bg-light m-t-70'>
    <p className='f-w-600 f-s-35 serif text-center p-t-50'>Testimonials</p>
    <CContainer className="overflow-hidden p-t-30 p-b-60">
  <CRow className='' xs={{ gutterY: 4 }}>
    <CCol xs={{ span: 4 }}>
      <div className="p-3 border ne rounded-2 bg-white ">
        <p className='f-s-20 serif p-t-20 p-l-10 f-w-600'>My Best picks so far</p>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem rerum emiy doloremque aspernatur voluptatem totam </p>
      </div>
    </CCol>
    <CCol xs={{ span: 4 }}>
      <div className="p-3 border n rounded-2 bg-white">
      <p className='f-s-20 serif p-t-20 p-l-10 f-w-600'>Never this amazed</p>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem rerum emiy doloremque aspernatur voluptatem totam </p>
      </div>
    </CCol>
    <CCol xs={{ span: 4 }}>
      <div className="p-3 border n rounded-2 bg-white">
      <p className='f-s-20 serif p-t-20 p-l-10 f-w-600'>Thank You!</p>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem rerum emiy doloremque aspernatur voluptatem totam </p>
      </div>
    </CCol>
    
  </CRow>
</CContainer>
</CContainer>
    </div>
  );
}

export default Testimonials;
