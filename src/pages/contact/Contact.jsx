import "./contact.css"
import { Icon } from '@iconify/react';

export default function Contact(){
    return(
        <div>
   
<div className="contactContainer2"> 
{/* <img src={process.env.PUBLIC_URL + 'image/getInTouch.jpg'} alt="macbookLaptop" /> */}
<div className="container2Text">
    <p>GET IN TOUCH</p>
</div>
<div className="contactMapInfo">
    
{/* <img src={process.env.PUBLIC_URL + 'image/getInTouch.jpg'} alt="macbookLaptop" /> */}
<div className="contactMapContainer">
   <div className="mapContainerText">
    <h3>CONTACT ME</h3> <br />
    <p>For any enquires you can always get in touch with me.</p> 
    <p> I will appreciate any opinion and will try to respond ASAP.</p> 
    <p>Email me  at "naomimbugua536@gmail.com. Through the link below</p> 
    <div className="buttonSubmit">
    <a href="mailto:naomimbugua536@gmail.com?subject=Inquiry&body=Hi Naomi,%0D%0A%0D%0A">
<Icon icon="logos:google-gmail" width="35" height="35"  />
</a>
    </div>
   </div>
    </div> 
    <div className="contactInfoContainer">
        <div className="callUs">
        <Icon icon="material-symbols:call" width="20" height="20" /><br /><br />
        <p>call</p>
            <div className="callIconText">
                <p>+254-703-937-319</p> 
            
            </div>

        </div>
        <div className="location">
        <Icon icon="material-symbols:location-on" width="20" height="20" /><br /><br />
        <p>location
                </p>
                {/* <hr /> */}
                <div className="locationText">
                    <p>Remote</p>
                </div>
        </div>
        <div className="businessHours">
        <Icon icon="fluent-mdl2:business-hours-sign" width="20" height="20" />
        <p>Business Hours</p>
                <div className="BusinessHoursText">
<p>Mon-fri 8:am-5pm</p>
                </div>
                {/* <hr /> */}

        </div>

</div>

     

</div>
</div>
</div>
    )
}