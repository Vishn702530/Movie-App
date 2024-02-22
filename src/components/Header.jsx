import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBInputGroup
  } from 'mdb-react-ui-kit';
  import './Header.css'
function Header() {
  return (
    <div>
        <MDBNavbar className='head'>
      <MDBContainer fluid>
        <MDBNavbarBrand style={{color:"white"}}>Movie</MDBNavbarBrand>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input style={{borderRadius:"10px"}} className='form-control' placeholder="Tell me" aria-label="Search" type='Search' />
          <MDBBtn outline className='btn' style={{color:"white",borderColor:"white",borderRadius:"10px"}}>Search</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header