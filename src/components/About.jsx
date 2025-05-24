import React from 'react'

function About() {
  return (
    <div id="about-layout">
      
      <div id="about-container">
      <section id="first-about-section" className='about-section'>
        <img id="profile-image" src="src/images/profil.jpg" alt="Profile-pic"/>
        <div>
        <h2>Magnus Olsson</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Enim beatae autem distinctio earum porro veritatis dolorum dolore, 
           ullam modi, sed assumenda
           temporibus fuga similique consequuntur 
           blanditiis ea quae vel natus!
        </p>
        </div>
      </section>
    
      <section id="second-about-section" className='about-section'>
        <div id="programming-languages-images">
          <button>Programming Langugages</button>
          <img className='skill-images' src="src/tech-images/java-logo.svg" alt="java-logo"/>
          <img className='skill-images' src="src/tech-images/css.svg" alt="css"/>
          <img style={{width: "135px", height: "135px"}} className='skill-images' src="src/tech-images/c++.svg.png" alt="c++"/>
          <img className='skill-images' src="src/tech-images/html.svg.png" alt="html"/>
          <img className='skill-images' src="src/tech-images/javascript.svg.png" alt="html"/>
        </div>

        <div id="framework-images">
          <button>Frameworks</button>
          <div style={{border: "2px solid black"}}>
            <img className='skill-images' src="src/tech-images/spring_Boot.svg.png" alt="Spring Boot"/>
            <h4 style={{color: "rgb(15, 172, 67)"}}>Spring Boot</h4>
          </div>
          <img className='skill-images' src="src/tech-images/logo-react.svg" alt="React JS"/>
        </div>
      </section>
      </div>

    </div>
  )
}

export default About