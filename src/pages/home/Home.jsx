import "./home.css"

import { Icon } from '@iconify/react';


export default function Home() {
  return (
    <div>
        

<div className="homeContainer2">
  <div className="homeContainerPicText">
    <div className="homeContainerPic">
  <div className="homeImageBoarder">
      <div className="homeImage">
       <img src={process.env.PUBLIC_URL + 'image/naomi.jpg'} alt="A  profile of a dark lady" />
     
      </div>
      </div>
    </div>
    <div className="homeContainerText">
      </div> 
      <div className="homeText">
  <div className="homeTextMyname">
  <p>NAOMI MBUGUA</p>

  </div>
  <div className="homeTextMySkill">
    
  <p>Web Developer</p>
  </div>
  <div className="homeTextmySkilldescription">
  <p>I am a  Junior front-end web developer in kenya.I develop websites for small businesses.</p>
  </div>
  <div className="homeSocialMediaIcons">
    <div className="homeFacebookIcon">
    <a href="https://www.facebook.com/naomi.mbugua.3194/" target="_blank" rel="noreferrer" aria-label='Facebook' >
    <Icon icon="ic:baseline-facebook" color="blue" width="20" height="20" />
    </a>
    </div>
<div className="homeGithubIcon">
<a href="https://github.com/Naominm" target="_blank" rel="noreferrer" aria-label='Github' >
<Icon icon="mdi:github" width="20"  color="#181717" height="20" />
</a>
</div>

<div className="homeLinkedinIcon"  >
<a href="https://www.linkedin.com/in/naomi-mbugua-b18984245/" target="_blank" rel="noreferrer" aria-label='LinkedIn' >
<Icon icon="mdi:linkedin" width="20" color="blue"  height="20"  />
</a>
</div>
        

<div className="homeTwitterIcon">
<a href="https://twitter.com/NayomiMbugua" target="_blank" rel="noreferrer" aria-label='Twitter' >
<Icon icon="mdi:twitter" width="20" color="#1DA1F2"  height="20" />
</a>
</div>
<div className="homeInstagramIcon">
<a href="https://www.instagram.com/nash_mbugua/" target="_blank" rel="noreferrer" aria-label='Instagram' >
<Icon icon="uil:instagram-alt" width="20" color="maroon" height="20" />
</a>
</div>

<div className="homeGmailIcon">
<a href="https://mail.google.com/" target="_blank" rel="noreferrer" >
<Icon icon="logos:google-gmail" width="20" height="20" />
</a>
</div>
  </div>
      </div>

  </div>

</div>

    </div>
  )
}
