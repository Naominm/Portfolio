import "./sidebar.css"
import React from 'react'
import {Link} from "react-router-dom";
import { Icon } from '@iconify/react';


export default function sidebar() {
  return (
    
    <div>
      
        <div className="sidebarContainer">
  <div className="LogoContainerIcons">
    <div className="logoContainer">
    <div className="font-face-gm">
<p>NASH</p>
</div>
    </div>
    <div className="icons">
      <div className="homeContainer">
      <div className="homeicon">
      <Icon icon="material-symbols:home" color="black"  width="20" height="20"/>
      </div>
      <div className="Hometext">
      <Link className="link" to={"/"}>
          Home
        </Link>
      </div>
      </div>
      <div className="AboutContainer">
      <div className="homeicon">
      <Icon icon="material-symbols:person" color="black"  width="20" height="20" />
      </div>
      <div className="Hometext">
        <Link className="link" to={"/about"}>
          About
        </Link>
      </div>
      </div>
      <div className="contactContainer">
      <div className="homeicon">
      <Icon icon="clarity:email-line" color="black" width="20" height="20" />
      </div>
      <div className="Hometext">
      <Link className="link" to={"/contact"}>
         Contact
        </Link>
      </div>
      </div>
      <div className="homeContainer">
      <div className="homeicon">
      <Icon icon="zondicons:portfolio" color="black" width="20" height="20" />
      </div>
      <div className="Hometext">
      <Link className="link" to={"/portfolio"}>
        portfolio
        </Link>
      </div>
      </div>
      <div className="copyrightContainer">
      <div className="homeicon">
      <Icon icon="ph:copyright-light" width="20" height="20" />
      </div>
      <p>Mbugua 2023<p>Created by onlineMedia </p> </p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
