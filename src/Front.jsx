import React from 'react'
import './Front.css';

const Front = () => {
  return (
    <div className='all1'>
        <div className='left1'>
        <h1>Welcome To reactJs</h1>
        <p>Reactjs workshop for cybersecurity students to make the understand the basics of html,css,javascript and Reactjs.</p>
        <div className='button1'>
        <button className='h1'>Our Sevices</button>
        <button className='h1'>Contacts</button>
       
        </div>
        </div>
        <div  classname='right1' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <img  style={{width:'500px',height:'450px',borderRadius:'20px'}} src='https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg'/>
        </div>

    </div>
  )
}

export default Front