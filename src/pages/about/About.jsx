import "./about.css"

export default function About(){
    return(
        <div>
  
<div className="aboutContainer2">

    <div className="aboutContainerText">
        {/* <div className="aboutTextBtn">
            <p>About</p>

        </div> */}
<div className="aboutTextHeading">
    <p>ABOUT ME</p>

</div>
    </div>
    <div className="containerHolder">
    <div className="aboutContainerImage">
     <img src={process.env.PUBLIC_URL + 'image/profile1.jpg'} alt="A black lady standing" />
     </div>
   
    <div className="aboutMyTextContainer">
      
        <div className="aboutMyBio">
            <p>
        <p>Hello! I'm a budding frontend web developer in Kenya.
             My passion for front-end web development shines through in my daily routines, 
             where I devote most of my time to coding. </p>
             
             I have a solid grasp of web scripting languages such as HTML and CSS, 
             and I've taken things to the next level by learning JavaScript, React JS,Next JS and GIT. Through these languages, I've been able to develop small yet impressive web projects and
              I'm eager to continue learning more in front-end development.</p> <br />
               <p> I'm eager to take my skills to the next level and make a positive impact in the industry. Thank you!.</p> <br />
               
               </div>
    
    
   
    
 <br /> <br /> <br />
 

<div className="aboutButtonDownloadResume">
    <a href="https://drive.google.com/file/d/1A7hfoSSyM3wCDxECMjbVJmPRwG923Z8K/view?usp=sharing" target="_blank" rel="noreferrer"> 
    <p class="buttonText">Download Resume</p>
       </a>
      
        </div>
        
        </div>
    
    </div>
</div>

</div>
    )
}