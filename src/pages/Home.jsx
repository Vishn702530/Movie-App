import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import './Home.css';
import DisplayMovie from '../components/DisplayMovie';

function Home() {
  const[datas,setDatas]=useState('')
  const inputss=(e)=>{
    setDatas(e.target.value)
    console.log(datas);
  }
  const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
    
    setShowComponent(!showComponent);
  };
  return (
    <div className='main'>
        <div className="input">
        <MDBInput label='Search Movie' id='form1' type='text' onChange={inputss} />
        <button className='btn btn-primary' onClick={handleButtonClick}>Search</button>
        </div> 
        {showComponent && <DisplayMovie moviename={datas}/>}
    </div>
  )
}

export default Home