import React, { useEffect, useState } from 'react';
 import {studentdata} from './../../data/phonebook'
 import Contactcard from '../../components/Contactcard/Contactcard';
 import './Home.css';



const Home = () => {

    const [contact ,setcontact] =useState(studentdata);
    const [searchterm ,setsearchterm] = useState('');
   useEffect(()=>{
const filtercontact = studentdata.filter((contact) => {
    let name = contact.name.toLocaleLowerCase();
    let phone = contact.phone.toString();
let query = searchterm.toLocaleLowerCase()
    return (name.includes(query) || phone.includes(query))
})
setcontact(filtercontact);

   },[searchterm])

   
   
  return (<>
    <div className='contact-container'>
        
      <p>Contact number </p>
      <input type='text' value={searchterm}  onChange={(e)=>{
setsearchterm(e.target.value);
      }} placeholder='sear here' className='sear-input'  />


     
{
    contact.map((contactdetail,index) =>{
const {name ,phone}=contactdetail;
return <Contactcard key={index} name={name} phone={phone} />
    })
}
      
    </div>

    </>
  )
}

export default Home
