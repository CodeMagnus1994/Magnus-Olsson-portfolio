import React from 'react'
import { useState } from 'react'

function About() {
 
  const [showTech, setShowTech] = useState("languages")

  return (
    <div id="about-layout">
      
      <div id="about-container">
      <section id="first-about-section" className='about-section'>
        <img id="profile-image" src="src/images/profil.jpg" alt="Profile-pic"/>
        <div>
        <h2>Magnus Olsson</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Enim beatae autem distinctio earum porro veritatis dolorum dolorfe, 
           ullam modi, sed assumenda
           temporibus fuga similique consequuntur 
           blanditiis ea quae vel natus!
        </p>
        </div>
      </section>
    
    <ul id="about-tech-buttons-list">
      <li><button className='tech-button-class' onClick={() => setShowTech("languages")}>Languages</button></li>
      <li><button className='tech-button-class' onClick={() => setShowTech("framework")}>Frameworks</button></li>
      <li><button className='tech-button-class' onClick={() => setShowTech("cloudservices")}>Cloudservicess</button></li>
      <li><button className='tech-button-class' onClick={() => setShowTech("tools")}>Tools</button></li>
      <li><button className='tech-button-class' onClick={() => setShowTech("databases")}>Databases</button></li>
    </ul>

      <section id="second-about-section" className='about-section'>
        
        {showTech === "languages" && (
         <div class="tech-images">
          <img className='skill-images' src="src/tech-images/java.svg" alt="java-logo"/>
          <img className='skill-images' src="src/tech-images/javascript.svg" alt="typescript"/>
          <img className='skill-images' src="src/tech-images/typescript-svgrepo-com.svg" alt="typescript"/>
          <img className='skill-images' src="src/tech-images/html-5.svg" alt="html"/>
          <img className='skill-images' src="src/tech-images/css-3.svg" alt="javascript"/>
        </div>
        )}

        {showTech === "framework" && (
        <div class="tech-images">
            <img style={{height: "130px", width: "130px"}} className='skill-images' src="src/tech-images/spring.svg" alt="Spring Boot"/>
            <img className='skill-images' src="src/tech-images/react-js.svg" alt="React JS"/>
        </div>  
        )}

        {showTech === "cloudservices" && (
        <div class="tech-images">
            <img style={{backgroundColor: "white", borderRadius: "35%", marginTop: "10px"}} className='skill-images' src="src/tech-images/aws.svg" alt="Amazon Web Services"/>
        </div>  
        )}

        {showTech === "databases" && (
        <div class="tech-images">
            <img style={{marginTop: "10px"}} className='skill-images' src="src/tech-images/postgresql.svg" alt="PostgreSQL"/>
        </div>  
        )}

        {showTech === "tools" && (
        <div class="tech-images">
            <img style={{backgroundColor: "white", borderRadius: "25%", marginTop: "10px"}} className='skill-images' src="src/tech-images/github.svg" alt="Github"/>
        </div>  
        )}
        
      </section>
      </div>
    </div>
  )
}

export default About