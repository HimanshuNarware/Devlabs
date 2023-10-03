import React from 'react'
import logo from '../image/logo.png'
import '../style/Footer.css'
import {FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import {BsGithub}from 'react-icons/bs'
import {AiTwotoneMail}from 'react-icons/ai'
function Footer() {
  return (
    <div>
      <div class="card">
  <div class="card-header">
    <img  width={300}px src={logo}/>
  </div>
  <div class="card-body">
    <h4 class="card-title ">Contact us</h4>
    <div className='contact-link'>
    <div className='cntc-link'><a href='https://www.linkedin.com/in/himanshunarware/' target='_blank' ><FaLinkedinIn/></a></div>  
  <div className='cntc-link'><a href='https://twitter.com/N_Himanshu_\' target='_blank' >   <FaTwitter/></a></div>  
  <div className='cntc-link'><a href='https://github.com/HimanshuNarware' target='_blank' >   <BsGithub/></a></div>  
  <div className='cntc-link'><a href='himanshunarware77@gmail.com' target='_blank' >   <AiTwotoneMail/></a></div> 
    </div>
  
  </div>
  <div class="card-header copyright">
  COPYRIGHT ©  Devlaps 2023   |   MAINTAINED BY  HIMANSHU NARWARE
  </div>
</div>
    </div>
  )
}

export default Footer
