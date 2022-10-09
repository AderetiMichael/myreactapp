import { CNavbar } from '@coreui/react';
import { CNavbarBrand } from '@coreui/react';
import { CNavbarNav } from '@coreui/react';
import { useState } from 'react';
import { CNavbarToggler } from '@coreui/react';
import { CContainer } from '@coreui/react'
import { CCollapse } from '@coreui/react'

import { CNavItem } from '@coreui/react'
import { CNavLink } from '@coreui/react'
import "./helper.css"
import "./style.css"
import cart from "./img/cart.svg"
import user from "./img/user.svg"
import search from "./img/search.svg"

//import "./bootstrap.css"



const Navbar = () => {
 
    
      const [visible, setVisible] = useState(false)
return (
  <>
    <CNavbar expand="lg" colorScheme="light" className="bg-white">
      <CContainer fluid >
        <CNavbarBrand style={{color: 'green'}} className='m-l-100'  href="#">Pizza.Hub &trade;</CNavbarBrand>
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
        <CCollapse className="navbar-collapse " visible={visible}>
          <CNavbarNav className='m-l-100'>
            <CNavItem className='menu'>
              <CNavLink href="#" active>
                menu
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink className='m-l-30' href="#" active>
                about us
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink className='m-l-30' href="#" active>
               our specials
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink className='m-l-30' href="#" active>our locations</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink className='m-l-30' href="#" active>our clients</CNavLink>
            </CNavItem>
            <div className='m-l-200 m-t-7'>
            <img className='icon' alt="Search" src={search} />
            <img className='icon m-l-30' alt="Cart" src={cart} />
            <img className='icon m-l-30' alt="User" src={user} />
            </div>
            
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  </>
);
    
  
}

export default Navbar;
