import React from 'react'
import './portfolio.css'
import { Icon } from '@iconify/react';


const Portfolio = () => {
  return (
    <div>
   <div className="portfolioContainer2">
     
<div className="containerText">
  <p>Portfolio</p> <br /> 
</div>
<div className="testSubtitle">
  <p>See My Latest Work</p>
  </div> 
  <div className="showCase3">
<img src={process.env.PUBLIC_URL + 'image/elingo.png'} alt="inreface for a neural machine translator" />
<div className="ProjectDetails">
  <h1>NMT-Interface</h1>
 
<div className="projectDescription">
< a href ="https://language-model.vercel.app/" target="_blank" rel="noreferrer" >
<Icon icon="iconoir:repository" color="black" width="24" height="24" />
</a>
</div>

</div>
</div>
<div className="showCase4">
<img src={process.env.PUBLIC_URL + 'image/secondhand.png'} alt="secondhand resell flagship" />
<div className="ProjectDetails">
  <h1> Flagship</h1>
 
<div className="projectDescription">
< a href ="https://flagship-secondhand.vercel.app/" target="_blank" rel="noreferrer" >
<Icon icon="iconoir:repository" color="black" width="24" height="24" />
</a>
</div>

</div>
</div>
     
<div className="showCase">
<img src={process.env.PUBLIC_URL + 'image/SnakeGame.png'} alt="prey in orange and eater in blue" />
<div className="ProjectDetails">
  <h1>Snake Game</h1>
 
<div className="projectDescription">
< a href ="https://naominm.github.io/snakeGame/" target="_blank" rel="noreferrer" >
<Icon icon="iconoir:repository" color="black" width="24" height="24" />
</a>
</div>

</div>
</div>
<div className="showcase2">
   <img src={process.env.PUBLIC_URL + 'image/BudgetAllocation.png'} alt="prey in orange and eater in blue" />
   <div className="ProjectDetails">
  <h1>BudgetApp</h1>
 
<div className="projectDescription">
< a href ="https://github.com/Naominm/ejtos-react_budget_app.git" target="_blank" rel="noreferrer" >
<Icon icon="iconoir:repository" color="black" width="24" height="24" />
</a>
</div>

</div>
    </div> 
    <div className="showCase5">
<img src={process.env.PUBLIC_URL + 'image/kienyeji.png'} alt="secondhand resell flagship" />
<div className="ProjectDetails">
  <h1>chicken</h1>
 
<div className="projectDescription">
< a href ="https://chicken-selling.netlify.app/" target="_blank" rel="noreferrer" >
<Icon icon="iconoir:repository" color="black" width="24" height="24" />
</a>
</div>

</div>
</div>
<div className="showCase6">
<img src={process.env.PUBLIC_URL + 'image/hospital.png'} alt="secondhand resell flagship" />
<div className="ProjectDetails">
  <h1>hospital</h1>
 
<div className="projectDescription">
< a href ="https://aarhospitalmanagementsystem.netlify.app/" target="_blank" rel="noreferrer" >
<Icon icon="iconoir:repository" color="black" width="24" height="24" />
</a>
</div>

</div>
</div>
        </div>
    </div>
  )
}

export default Portfolio