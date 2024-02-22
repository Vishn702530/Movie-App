import React, { useState } from 'react'
import './DisplayMovie.css'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import axios from 'axios';
function DisplayMovie({moviename}) {

 const [da,setda]=useState({})

  const urlss=`https://www.omdbapi.com/?apikey=576fc180&t=${moviename}`

  axios.get(urlss)
  .then(response => {
    // Handle the successful response
    console.log('Response:', response.data);
    setda(response.data)
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });


  return (
    <div className='first'>
        <div className="card">
        <MDBCard>
      <MDBCardImage style={{height:'300px', width:'300px'}} position='top' alt='...' src={da.Poster} />
      <MDBCardBody>
        <MDBCardTitle>{da.Title}</MDBCardTitle>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>{da.Released}</MDBListGroupItem>
        <MDBListGroupItem>{da.Actors}</MDBListGroupItem>
        <MDBListGroupItem>{da.Plot}</MDBListGroupItem>
        <MDBListGroupItem>{da.imdbRating}</MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
        </div>
    
    </div>
  )
}

export default DisplayMovie