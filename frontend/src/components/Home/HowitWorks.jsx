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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum iure provident illo temporibus, dolorum dicta similique facilis! Voluptatem quas repellat, ad dolorem, ipsum ex sint fugiat, aperiam error aliquam consequuntur explicabo! Explicabo rerum asperiores provident porro quaerat consequuntur ullam illo, quis omnis fugit veniam molestias repellat nemo, esse pariatur fugiat!</p>
          </div>
          <div className='card'>
            <MdFindInPage/>
            <p>Find a Job/Post a Job</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum iure provident illo temporibus, dolorum dicta similique facilis! Voluptatem quas repellat, ad dolorem, ipsum ex sint fugiat, aperiam error aliquam consequuntur explicabo! Explicabo rerum asperiores provident porro quaerat consequuntur ullam illo, quis omnis fugit veniam molestias repellat nemo, esse pariatur fugiat!</p>
          </div>
          <div className='card'>
            <IoMdSend/>
            <p>Create Account</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum iure provident illo temporibus, dolorum dicta similique facilis! Voluptatem quas repellat, ad dolorem, ipsum ex sint fugiat, aperiam error aliquam consequuntur explicabo! Explicabo rerum asperiores provident porro quaerat consequuntur ullam illo, quis omnis fugit veniam molestias repellat nemo, esse pariatur fugiat!</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HowitWorks;
