import Project from "./project";

function Portfolio() {
    let projects=[
        {
            name: "Project 1", 
            description: "describe here",
            github: "github url here",
            url: "url to live site here",
            image: "path to image here"
        },
        {
            name: "Project 2", 
            description: "describe here",
            github: "github url here",
            url: "url to live site here",
            image: "path to image here"
        },
        {
            name: "Project 3", 
            description: "describe here",
            github: "github url here",
            url: "url to live site here",
            image: "path to image here"
        },
    ]
    return (
      <div className="portfolio">
        <h1>Portfolio</h1>
        {projects.map(project=>{})}
      </div>
    );
  }
  
  export default Portfolio;