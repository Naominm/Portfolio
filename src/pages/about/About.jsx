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
    <div className="aboutContainerImage">
     <img src={process.env.PUBLIC_URL + 'image/aboutNash.jpg'} alt="A black lady standing" />
    </div>
    <div className="aboutMyTextContainer">
        <div className="aboutMyTextHeading">
        <p>Naomi Mbugua</p>

        </div>
        <div className="aboutMyTextSubHeading">
        <p>Web Developer</p>
        </div><hr />
        <div className="aboutMyBio">
            <p>
        <p>Hey, my name is Naomi Mbugua
           I am a junior frontend web developer and A student in Muranga University.I am currently looking for an industrial attachment
           in software development.I spend most of the time coding in all my daily routines. I am passionate in front-end web developmet. </p>
             
              I have learnt the web scripting languages HTML and CSS. I  have als moved a step further and learnt JS 
                and now i am learning React JS as well as GIT.Through this i have been able to develop small basic web projects.And  i am ready
                to learn more in Fron-end development.</p>
               <p> Could you be knowing any web development company offering internship/Industrial attachment? Get in touch with me.</p> <br />
               

    </div> <br /><hr />
    <div className="aboutMyOtherDetails">
        <div className="aboutBackground">
<ul>
    Birthday: <br /><br />
    Age: <br /><br />
    Address: <br /><br />
    Email: <br /> <br />
    Phone: 
</ul>
        </div> 
        <div className="aboutFrontground">
        <ul>
13/02/2001 <br /><br />
    22 <br /><br />
   1075 <br /><br />
    naomimbugua536@gmail.com <br /><br/>
    0703937319<br /><br/>
</ul>
        </div> 
<div className="aboutBackground2">
<ul>
    Nationality: <br /><br />
    Study: <br /><br />
    Degree: <br /><br />
    Intrest: <br /> <br />
    freelance: 
</ul>
       
</div> 
<div className="aboutBackground3">
<ul>
    Kenyan <br /><br />
    Muranga University <br /><br />
    Software Engineering <br /><br />
    Artificial Inteligence <br /> <br />
    Available
</ul>
</div> 
    </div>
 <br /> <br /> <br />
<hr /> <br /> 
<div className="aboutButtonDownloadResume">
    <a href="https://drive.google.com/file/d/17vQAphKjUlQW6QE_H8hw35m-PlTLVEG5/view?usp=share_link" target="_blank" rel="noreferrer"> 
    <p class="buttonText">Download Resume</p>
       </a>
      
        </div>
        
    </div>
    

</div>
        </div>
    )
}