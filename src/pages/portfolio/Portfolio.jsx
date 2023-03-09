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
     
<div className="showCase">
<img src={process.env.PUBLIC_URL + 'image/SnakeGame.png'} alt="prey in orange and eater in blue" />
<div className="ProjectDetails">
  <h1>Snake Game</h1>
 
<div className="projectDescription">
< a href ="https://github.com/Naominm/snakeGame.git" target="_blank" rel="noreferrer" >
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
        </div>
    </div>
  )
}

export default Portfolio