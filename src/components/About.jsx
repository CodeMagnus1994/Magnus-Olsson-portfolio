import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Input, Typography, TextField } from '@mui/material';
import { useState } from 'react'
import { motion } from "framer-motion";

function About() {
 
  const [showTech, setShowTech] = useState("languages")
  const [openEmailDialog, setOpenEmailDialog] = useState(false)

  const cancelDialog = () => {
    setOpenEmailDialog(false)
  }

  const sendEmail = (e) => {
    e.preventDefault()
    console.log("email sent")
    setOpenEmailDialog(false)
  }

  return (
    <>

    <Dialog open={openEmailDialog}>

      <div id="email-dialog-interior">
        <button onClickCapture={() => cancelDialog()} id="cancel-email-dialog-button">
          <img id="cancel-icon" src="src/tech-images/cancel-button.svg" alt="cancel-button"/>
        </button>
        <form id="email-dialog-form">

          <h3 className='dialog-text'>Enter fullname</h3>
          <input style={{fontSize: "15px"}} className="email-input" placeholder='Fullname...'></input>
            
          <h3 className='dialog-text'>Enter email</h3>
          <input style={{fontSize: "15px"}} className="email-input" placeholder='Email...'></input>
         
          <h3 className='dialog-text'>Subject</h3>
          <input style={{fontSize: "15px"}} className="email-input" placeholder='Subject matter...'></input>

          <h3 className='dialog-text'>Message</h3>
          <textarea placeholder='Enter message...' style={{fontSize: "15px"}} id="text-area-email" className='email-input'></textarea>

          <button onClick={(e) => sendEmail(e)} id="email-send-button">Send</button>

        </form>
      </div>
      
    </Dialog>


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
                      Enim beatae autem distinctio earum porro veritatis dolorum dolorfe, 
           ullam modi, sed assumenda
           temporibus fuga similique consequuntur 
           blanditiis ea quae vel natus!
        </p>
           <div id="about-me-container">
          <p className='about-me-paragraph'>
            <img className='about-me-icons' src="src/tech-images/github.svg" alt="github-about-logo"/>
            <a className='about-me-links' href="https://github.com/CodeMagnus1994" target="_blank"rel="noopener noreferrer" alt="github-link"><strong>Github</strong></a>
          </p>
        <p className='about-me-paragraph'>
            <img className='about-me-icons' src="src/tech-images/linkedin-brands.svg" alt="linkedin-about-logo"/>
            <a className='about-me-links' href="https://www.linkedin.com/in/magnusolsson1994/" target="_blank"rel="noopener noreferrer" alt="linkedin-link"><strong>LinkedIn</strong></a>
        </p>
        <p className='about-me-paragraph'>
            <img className='about-me-icons' src="src/tech-images/email.svg" alt="email"/>
            <button id="email-button" onClick={() => setOpenEmailDialog(true)} className='about-me-button'><strong>magnus1994olsson@gmail.com</strong></button>
        </p>
        <p className='about-me-paragraph'>
            <img className='about-me-icons' src="src/tech-images/phone.svg" alt="phone-number"/>
            <a className='about-me-links'><strong>073-424-65-04</strong></a>
        </p>
        <p className='about-me-paragraph'>
            <img className='about-me-icons' src="src/tech-images/cv.svg" alt="résumé-about-logo"/>
            <a href="/resume.pdf" download><button className='cv-personal-letter-button'>Download résumé</button></a>
        </p>

         <p className='about-me-paragraph'>
            <img className='about-me-icons' src="src/tech-images/coverletter.svg" alt="cover-letter-about-logo"/>
            <a href="/coverletter.pdf" download><button className='cv-personal-letter-button'>Download cover letter</button></a>
        </p>
        </div>
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
        <motion.div
         className="tech-images"
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 25 }}
         transition={{ duration: 0.5 }}
         >
         <div class="tech-images">
          <div>
            <img className='skill-images' src="src/tech-images/java.svg" alt="java-logo"/>
            <h4 style={{marginLeft: "55px"}}>Java</h4>
          </div>
          <div>
            <img className='skill-images' src="src/tech-images/javascript.svg" alt="typescript"/>
            <h4 style={{marginLeft: "40px"}}>Javascript</h4>
          </div>
          <div>
            <img className='skill-images' src="src/tech-images/typescript-svgrepo-com.svg" alt="typescript"/>
            <h4 style={{marginLeft: "40px"}}>Typescript</h4>
          </div>
          <div>
            <img className='skill-images' src="src/tech-images/html-5.svg" alt="html"/>
            <h4 style={{marginLeft: "55px"}}>HTML 5</h4>
          </div>
          <div>
             <img className='skill-images' src="src/tech-images/css-3.svg" alt="javascript"/>
             <h4 style={{marginLeft: "55px"}}>CSS 3</h4>         
          </div>
        </div>
        </motion.div>
        )}

        {showTech === "framework" && (
               <motion.div
         className="tech-images"
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 25 }}
         transition={{ duration: 0.5 }}
         >
        <div class="tech-images">
            <div>
              <img style={{height: "130px", width: "150px", marginTop: "25px"}} className='skill-images' src="src/tech-images/spring.svg" alt="Spring Boot"/>
              <h4 style={{marginLeft: "33px"}}>Spring Boot</h4>
            </div>
            <div>
               <img className='skill-images' src="src/tech-images/react-js.svg" alt="React JS"/>
               <h4 style={{marginLeft: "50px"}}>React JS</h4>
            </div>
        </div>  
        </motion.div>
        )}

        {showTech === "cloudservices" && (
                       <motion.div
         className="tech-images"
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 25 }}
         transition={{ duration: 0.5 }}
         >
        <div class="tech-images">
          <div>
            <img style={{backgroundColor: "white", borderRadius: "35%", marginTop: "10px", marginLeft: "10px"}} className='skill-images' src="src/tech-images/aws.svg" alt="Amazon Web Services"/>
            <h4 style={{marginLeft: "35px"}}>Amazon Web Services</h4>
          </div>
        </div>  
        </motion.div>
        )}

        {showTech === "databases" && (
                           <motion.div
         className="tech-images"
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 25 }}
         transition={{ duration: 0.5 }}
         >
        <div class="tech-images">
          <div>
            <img style={{marginTop: "10px"}} className='skill-images' src="src/tech-images/postgresql.svg" alt="PostgreSQL"/>
            <h4 style={{marginLeft: "40px"}}>PostgreSQL</h4>
          </div>
        </div>  
        </motion.div>
        )}

        {showTech === "tools" && (
                             <motion.div
         className="tech-images"
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 25 }}
         transition={{ duration: 0.5 }}
         >
        <div class="tech-images">
          <div>
            <img style={{backgroundColor: "white", borderRadius: "25%", marginTop: "10px", marginLeft: "15px"}} className='skill-images' src="src/tech-images/github.svg" alt="Github"/>
            <h4 style={{marginLeft: "65px"}}>Github</h4>
          </div>
          <div>
            <img style={{backgroundColor: "white", borderRadius: "25%", marginTop: "10px"}} className='skill-images' src="src/tech-images/materialui.svg" alt="MaterialUI"/>
            <h4 style={{marginLeft: "35px"}}>MaterialUI</h4>
          </div>
        </div>  
        </motion.div>
        )}
        
      </section>
      </div>
    </div>
    </>
  )
}

export default About