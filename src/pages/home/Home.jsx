import "./home.css";
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <div>
      <div className="homeContainer2">
        <div className="homeContainerPicText">
          <div className="homeContainerPic">
            <div className="homeImageBoarder">
              <div className="homeImage">
                <img src={process.env.PUBLIC_URL + 'image/profile1.jpg'} alt="A profile of a dark lady" />
              </div>
            </div>
          </div>

          <div className="homeText">
            <div className="homeTextMyname">
              <p>NAOMI MBUGUA</p>
            </div>
            <div className="homeTextMySkill">
              <p>Web Developer</p>
            </div>
            <div className="homeTextmySkilldescription">
              <p>I'm a Front-End Web Developer based in Kenya,
                with a passion for designing and developing websites that meet the unique needs of
                businesses. I specialize in crafting clean, responsive,
                and user-friendly interfaces using the latest web technologies and best practices.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1A7hfoSSyM3wCDxECMjbVJmPRwG923Z8K/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="downloadResumeLink"
            >
              Download Resume
            </a>
            <div className="homeSocialMediaIcons">
              <div className="homeFacebookIcon">
                <a href="https://www.facebook.com/naomi.mbugua.3194/" target="_blank" rel="noreferrer" aria-label='Facebook'>
                  <Icon icon="ic:baseline-facebook" color="blue" width="20" height="20" />
                </a>
              </div>
              <div className="homeGithubIcon">
                <a href="https://github.com/Naominm" target="_blank" rel="noreferrer" aria-label='Github'>
                  <Icon icon="mdi:github" width="20" color="white" height="20" />
                </a>
              </div>
              <div className="homeLinkedinIcon">
                <a href="https://www.linkedin.com/in/naomi-mbugua-b18984245/" target="_blank" rel="noreferrer" aria-label='LinkedIn'>
                  <Icon icon="mdi:linkedin" width="20" color="blue" height="20" />
                </a>
              </div>
              <div className="homeTwitterIcon">
                <a href="https://twitter.com/NayomiMbugua" target="_blank" rel="noreferrer" aria-label='Twitter'>
                  <Icon icon="mdi:twitter" width="20" color="#1DA1F2" height="20" />
                </a>
              </div>
              <div className="homeInstagramIcon">
                <a href="https://www.instagram.com/nash_mbugua/" target="_blank" rel="noreferrer" aria-label='Instagram'>
                  <Icon icon="uil:instagram-alt" width="20" color="#68221F" height="20" />
                </a>
              </div>
              <div className="homeGmailIcon">
              <a href="mailto:naomimbugua536@gmail.com?subject=Inquiry&body=Hi Naomi,%0D%0A%0D%0A">
                  <Icon icon="logos:google-gmail" width="20" height="20" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
