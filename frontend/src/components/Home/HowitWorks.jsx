import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowitWorks = () => {
  return (
    <div className='howitworks'>
      <div className='container'>
        <h3>How JobZee Works</h3>
        <div className='banner'>
          <div className='card'>
            <FaUserPlus/>
            <p>Create Account</p>
            <p>Choose an appropriate username. Create your own user page, to collaborate, share information about yourself,Make it easier for other editors to communicate with you. Even if you don't feel any need to contact other editors, they may wish to contact you.</p>
          </div>
          <div className='card'>
            <MdFindInPage/>
            <p>Find a Job</p>
            <p>The company has onboarded 20,000 employers within the first eight months since its launch, and it has received two million job applications, resulting in 10,000 individuals securing employment.According to Job Today, the ideal timing of submitting the CV increases the chances of the candidate securing a job.</p>
          </div>
          <div className='card'>
            <IoMdSend/>
            <p>Work with us</p>
            <p>We are looking for a Senior Manager, Fundraising Data & Analytics to lead the team who are responsible for managing and evolving our data and analytics practice. The Senior Manager will lead the design, implementation, and maintenance of the data systems, processes.</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HowitWorks;
