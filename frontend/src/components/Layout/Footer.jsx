import React, { useContext } from 'react'
import { Context } from '../../main';
import { Link } from 'react-router-dom';
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Right Are Reserved.</div>
      <div>
        <Link to={"https://www.linkedin.com/in/nayan-nikhare/"} target='_blank'>
        <FaLinkedin />
        </Link>
        <Link to={"https://github.com/Nayan0406"} target='_blank'>
        <FaGithub />
        </Link>
        <Link to={"https://www.instagram.com/nayan_n04/?next=%2F&hl=en"} target='_blank'>
        <RiInstagramFill />
        </Link>
      </div>
    </footer>
  )
};

export default Footer;