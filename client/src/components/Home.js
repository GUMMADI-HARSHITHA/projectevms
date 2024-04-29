//import { Typography } from '@mui/material'
import React from 'react';
import Itemcard from "./Itemcard";


  const Home = () => {
   
    return (
       <section className='home-page'>
           &nbsp;
        <div className='banner-image'>
           <h1> EVENT MANAGEMENT SYSTEM</h1>
           </div>
           &nbsp;
           &nbsp;
           <h1 className='text-center mt-3'>SERVICES</h1>
        <section className="py-4 container">
          <div className='row justify-content-center'>
                 
                 <Itemcard img="" title="title" desc="desc" />
          </div>
        </section>
       <>
       <h1 className='text-center mt-3'>CONTACT & FOLLOW US ON</h1>
        <section className="py-4 containers">
          <div className='row justify-content-center'>
            <img src='./images/img33.jpg' ></img>
            <img src='./images/qr.png'></img>

          </div>
        </section>
       
       
      
      </>  
      </section> 
    );
  };
export default Home;  
