import React from 'react'

function Projects() {
  return (
    <div id="projects-layout">
      <div id="project-container-upper">
        <section className='project-section'>
          <h1 style={{position: 'relative', left: '190px'}} className='project-section-title'>Goodreads</h1>
          <a className='image-link-attribute' alt="Kollicon-github-source-code" target="_blank"rel="noopener noreferrer">
          <img className='project-image' src="src/images/project.png" alt="project"/>
          <p className="image-click-paragraph">To be released!</p>
          </a>
        </section>
          <section className='project-section'>
          <h1 style={{position: 'relative', left: "190px"}} className='project-section-title'>Yrkeskompetens</h1>
          <a className='image-link-attribute' href='https://github.com/CodeMagnus1994/yrkeskunskaper' alt="yrkeskompetens-live" target="_blank"rel="noopener noreferrer">
          <img className='project-image' src="src/images/project.png" alt="project"/>
          <p className="image-click-paragraph">Visit Website</p>
          </a>
        </section>
          <section className='project-section'>
          <h1 className='project-section-title'>Kollicon</h1>
          <a className='image-link-attribute' href='https://github.com/CodeMagnus1994/KOLLiCon' alt="github-kollicon" target="_blank"rel="noopener noreferrer">
          <img className='project-image' src="src/images/project.png" alt="project"/>
          <p className="image-click-paragraph">Visit Github</p>
          </a>   
        </section>
       </div>
       
       <div id="project-container-lower">
        <section className="lower-section">
          <h3 className='project-lower-text'>Stauts: Not online</h3>
          <h3 className='project-lower-text'>Category: Frontend</h3>
          <a className='source-code-link'  alt="Github-yrkeskompetens">Source Code</a>
          <div className='project-tech-list'>
            <ul className='project-lower-tech-list'>
          </ul>
          </div>
          <div className='project-description'>
            <h2>Goodreads:</h2>
            <p>No description available.</p>
          </div>
        </section>

       <section style={{position: 'relative', right: "344px"}} className="lower-section">
          <h3 className='project-lower-text'>Stauts: Deployed to Yrkeskompetens.se</h3>
          <h3 className='project-lower-text'>Category: Frontend</h3>
          <a className='source-code-link' href='https://github.com/CodeMagnus1994/yrkeskunskaper' alt="github-yrkeskompetens" target="_blank"rel="noopener noreferrer">Source Code</a>
          <div className='project-tech-list'>
            <ul className='project-lower-tech-list'>
            <li className='project-lower-tech-li' ><img className="project-lower-tech-image" src="src/tech-images/javascript.svg" alt="javascript-lower-project-image"/></li>
            <li className='project-lower-tech-li' ><img style={{backgroundColor: "#2e3944"}} className="project-lower-tech-image" src="src/tech-images/html-5.svg" alt="html-lower-project-image"/></li>
            <li className='project-lower-tech-li' ><img style={{backgroundColor: "#2e3944"}} className="project-lower-tech-image" src="src/tech-images/css-3.svg" alt="css-lower-project-image"/></li>
            <li className='project-lower-tech-li' ><img style={{backgroundColor:"white"}} className="project-lower-tech-image" src="src/tech-images/github.svg" alt="github-lower-project-image"/></li>
          </ul>
          </div>
          <div className='project-description'>
            <h2>Yrkeskompetens:</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Illo, nobis cumque iusto eius earum, repudiandae exercitationem 
              ad aliquam fugiat impedit, cum deserunt!
               Esse doloribus blanditiis iste deserunt a doloremque excepturi.</p>
          </div>
        </section>

       <section style={{position: 'relative', right: "693px"}} className="lower-section">
          <h3 className='project-lower-text'>Stauts: Not online</h3>
          <h3 className='project-lower-text'>Category: Fullstack</h3>
          <a className='source-code-link' href='https://github.com/CodeMagnus1994/KOLLiCon' alt="github-kollicon" target="_blank"rel="noopener noreferrer">Source Code</a>
          <div className='project-tech-list'>
            <ul className='project-lower-tech-list'>
            <li className='project-lower-tech-li' ><img className="project-lower-tech-image" src="src/tech-images/typescript-svgrepo-com.svg" alt="typescript-lower-project-image"/></li>
            <li className='project-lower-tech-li' ><img className="project-lower-tech-image" src="src/tech-images/java.svg" alt="java-lower-project-image"/></li>
            <li className='project-lower-tech-li' ><img className="project-lower-tech-image" src="src/tech-images/spring.svg" alt="spring-lower-project-image"/></li>
            <li className='project-lower-tech-li' ><img className="project-lower-tech-image" src="src/tech-images/react-js.svg" alt="react-js-lower-project-image"/></li>
            <li className='project-lower-tech-li' ><img className="project-lower-tech-image" src="src/tech-images/materialui.svg" alt="material-ui-lower-project-image"/></li>
            <li className='project-lower-tech-li' ><img style={{backgroundColor:"white"}} className="project-lower-tech-image" src="src/tech-images/github.svg" alt="github-lower-project-image"/></li>
          </ul>
          </div>
          <div className='project-description'>
            <h2>Yrkeskompetens:</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Illo, nobis cumque iusto eius earum, repudiandae exercitationem 
              ad aliquam fugiat impedit, cum deserunt!
               Esse doloribus blanditiis iste deserunt a doloremque excepturi.</p>
          </div>
        </section>
       </div>
    </div>
  )
}

export default Projects