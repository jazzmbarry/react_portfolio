import Froogal_Flyers from '../../assets/project_img/Froogal-Flyers.jpg';
import the_powder_project from '../../assets/project_img/the_powder_project.jpg'
import Portfolio from '../../assets/project_img/portfolio.png'

const projects =

[
    {
        "title": "Portfolio",
        "deploy": "www.google.com",
        "github_url": "https://github.com/jazzmbarry/react_portfolio",
        "github": "react_portfolio",
        "description": "My portfolio built with React",    
        "technologies": "React, JavaScript, CSS-Milligram, HTML",
        "image": Portfolio 
    },
    {
        "title": "Froogal Flyers",
        "deploy": "https://jazzmbarry.github.io/Froogal-Flyers/",
        "github_url": "https://github.com/jazzmbarry/Froogal-Flyers",
        "github": "Froogal-Flyers",
        "description": "Froogal Flyers is a website that will help you find the cheapest flight to where ever you want. It will give you the dates those flights are cheapest and what airlines to look at. It will also give you events and activities to do around the time you select.",
        "technologies": "JavaScript, CSS-Milligram, APIs-SkyScanner and SeatGeak, HTML",
        "image": Froogal_Flyers
    },
    {
        "title": "The Powder Project",
        "deploy": "https://hidden-anchorage-82210.herokuapp.com/",
        "github_url": "https://github.com/aeforbush/the_powder_project",
        "github": "the_powder_project",
        "description": "The Powder Project is a CMS style site that helps snow sport enthusiasts determine where to go in Utah for their next winter adventure. Users will be able to find Utah Mountain Resorts, their rating as well as the Powder report for that resort. Additionally, users will gain futher knowledge of the mountain resort through review post made by other snow sport enthusiats as well as leave their own review.",
        "technologies": "JavaScript, NodeJS, Express.js, MySQL2, Sequelize, Dotenv, CSS, HTML",
        "image": the_powder_project
    },

    // {
    //     "title": "Final Project",
    //     "deploy": "",
    //     "github_url": "",
    //     "github": "",
    //     "description": "",    
    //     "technologies": "",
    //     "image": null

    // }
]

export default projects;