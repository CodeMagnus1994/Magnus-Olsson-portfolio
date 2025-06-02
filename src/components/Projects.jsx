import React from 'react'

function Projects() {
  return (
    <div id="projects-layout">

      <div id="project-container">

        {/* SECTION 1 */}
        <section className='project-section'>
          <h1 style={{position: 'relative', left: '190px', width: "150px"}} className='project-section-title'>Book Auction</h1>
          <a className='image-link-attribute' alt="Kollicon-github-source-code" target="_blank"rel="noopener noreferrer">
          <img className='project-image' src="src/images/project.png" alt="project"/>
          <p className="image-click-paragraph">To be released!</p>
          </a>
          <box className="project-lower-part">
          <h3 style={{color: "red"}} className='project-lower-text'>Offline</h3>
          <h3 className='project-lower-text'>Frontend</h3>
          <a className='source-code-link'  alt="Github-yrkeskompetens">Source Code</a>
          <div className='project-tech-list'>
            <ul className='project-lower-tech-list'>
            <li className='project-lower-tech-li' ><img style={{backgroundColor: "#2e3944"}} className="project-lower-tech-image" src="src/tech-images/missing.svg" alt="missing-image"/></li>
            <li className='project-lower-tech-li' ><img style={{backgroundColor: "#2e3944"}} className="project-lower-tech-image" src="src/tech-images/missing.svg" alt="missing-image"/></li>
            <li className='project-lower-tech-li' ><img style={{backgroundColor: "#2e3944"}} className="project-lower-tech-image" src="src/tech-images/missing.svg" alt="missing-image"/></li>
            <li className='project-lower-tech-li' ><img style={{backgroundColor: "#2e3944"}} className="project-lower-tech-image" src="src/tech-images/missing.svg" alt="missing-image"/></li>
          </ul>
          </div>
          <div className='project-tech-list'>
            <ul className='project-lower-tech-list'>
          </ul>
          </div>
          <div className='project-description'>
            <p>No description available.</p>
          </div>
          </box>
        </section>

       {/* SECTION 2 */}
        <section className='project-section'>
          <h1 style={{position: 'relative', left: "190px"}} className='project-section-title'>Yrkeskompetens</h1>
          <a className='image-link-attribute' href='https://github.com/CodeMagnus1994/yrkeskunskaper' alt="yrkeskompetens-live" target="_blank"rel="noopener noreferrer">
          <img className='project-image' src="src/images/yrkeskompetens.png" alt="project-yrkeskompetens"/>
          <p className="image-click-paragraph">Click me</p>
          </a>
          <box className='project-lower-part'>
          <h3 style={{color: "rgb(9, 170, 4)"}} className='project-lower-text'>Online</h3>
          <h3 className='project-lower-text'>Frontend</h3>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Illo, nobis cumque iusto eius earum, repudiandae exercitationem 
              ad aliquam fugiat impedit, cum deserunt!
               Esse doloribus blanditiis iste deserunt a doloremque excepturi.</p>
          </div>
          </box>

        </section>

        {/* SECTION 3 */}
          <section className='project-section'>
          <h1 className='project-section-title'>Kollicon</h1>
          <a className='image-link-attribute' href='https://github.com/CodeMagnus1994/KOLLiCon' alt="github-kollicon" target="_blank"rel="noopener noreferrer">
          <img className='project-image' src="src/images/kollicon.png" alt="project"/>
          <p className="image-click-paragraph">Click me</p>
          </a>   

          <box className="project-lower-part">
          <h3 style={{color: "red"}} className='project-lower-text'>Offline</h3>
          <h3 className='project-lower-text'>Fullstack</h3>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Illo, nobis cumque iusto eius earum, repudiandae exercitationem 
              ad aliquam fugiat impedit, cum deserunt!
               Esse doloribus blanditiis iste deserunt a doloremque excepturi.</p>
          </div>
          </box>
     
        </section>

       </div>
    </div>
  )
}

export default Projects