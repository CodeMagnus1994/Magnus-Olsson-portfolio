import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Input, Typography, TextField } from '@mui/material';
import { useState } from 'react'
import { motion } from "framer-motion";
import profileImage from '../images/profil.jpg'; 
import awsImage from '../tech-images/aws.svg'; 
import cancelButton from '../tech-images/cancel-button.svg';
import coverLetter from '../tech-images/coverletter.svg'; 
import cssImage from '../tech-images/css-3.svg'; 
import cvImage from '../tech-images/cv.svg'; 
import emailImage from '../tech-images/email.svg'; 
import githubImage from '../tech-images/github.svg'; 
import htmlImage from '../tech-images/html-5.svg'; 
import javaImage from '../tech-images/java.svg'; 
import javascriptImage from '../tech-images/javascript.svg'; 
import linkedinImage from '../tech-images/linkedin-brands.svg'; 
import materialuiImage from '../tech-images/materialui.svg'; 
import phoneImage from '../tech-images/phone.svg'; 
import postgresqlImage from '../tech-images/postgresql.svg'; 
import reactjsImage from '../tech-images/react-js.svg'; 
import springImage from '../tech-images/spring.svg'; 
import typescriptImage from '../tech-images/typescript-svgrepo-com.svg'; 


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
          <img id="cancel-icon" src={cancelButton} alt="cancel-button"/>
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

      {/*SECTION 1*/}
      <section id="first-about-section" className='about-section'>
        <img id="profile-image" src={profileImage} alt="Profile-pic"/>
        <div>
        <div id="about-me-information">  
        <h2>Magnus Svensson</h2>
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
        </div>
           <div id="about-me-container">
          <p className='about-me-paragraph'>
            <img className='about-me-icons' src={githubImage} alt="github-about-logo"/>
            <a className='about-me-links' href="https://github.com/CodeMagnus1994" target="_blank"rel="noopener noreferrer" alt="github-link"><strong>Github</strong></a>
          </p>
        <p className='about-me-paragraph'>
            <img className='about-me-icons' src={linkedinImage} alt="linkedin-about-logo"/>
            <a className='about-me-links' href="https://www.linkedin.com/in/magnusolsson1994/" target="_blank"rel="noopener noreferrer" alt="linkedin-link"><strong>LinkedIn</strong></a>
        </p>
        <p className='about-me-paragraph'>
            <img className='about-me-icons' src={emailImage} alt="email"/>
            <button id="email-button" onClick={() => setOpenEmailDialog(true)} className='about-me-button'><strong>magnus1994olsson@gmail.com</strong></button>
        </p>
        <p className='about-me-paragraph'>
            <img className='about-me-icons' src={phoneImage} alt="phone-number"/>
            <a className='about-me-links'><strong>073-424-65-04</strong></a>
        </p>
        <p className='about-me-paragraph'>
            <img className='about-me-icons' src={cvImage} alt="résumé-about-logo"/>
            <a href="/resume.pdf" download><button className='cv-personal-letter-button'>Download résumé</button></a>
        </p>

         <p className='about-me-paragraph'>
            <img className='about-me-icons' src={coverLetter} alt="cover-letter-about-logo"/>
            <a href="/coverletter.pdf" download><button className='cv-personal-letter-button'>Download cover letter</button></a>
        </p>
        </div>
        </div>
      </section>

      {/*SECTION2 */}
      <section id="second-about-section" className='about-section'>       
     <ul id="about-tech-buttons-list">
      <li><button className='tech-button-class' onClick={() => setShowTech("languages")}>Languages</button></li>
      <li><button className='tech-button-class' onClick={() => setShowTech("framework")}>Frameworks</button></li>
      <li><button className='tech-button-class' onClick={() => setShowTech("cloudservices")}>Cloudservicess</button></li>
      <li><button className='tech-button-class' onClick={() => setShowTech("tools")}>Tools</button></li>
      <li><button className='tech-button-class' onClick={() => setShowTech("databases")}>Databases</button></li>
     </ul>       
        {showTech === "languages" && (
        <motion.div
         className="tech-images"
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 25 }}
         transition={{ duration: 0.5 }}
         >
         <div className="tech-images">
          <div className='tech-content-container'>
            <img className='skill-images' src={javaImage} alt="java-logo"/>
            <h4 className='skill-image-title'>Java</h4>
          </div>
          <div className='tech-content-container'>
            <img className='skill-images' src={javascriptImage} alt="typescript"/>
            <h4 className='skill-image-title'>Javascript</h4>
          </div>
          <div className='tech-content-container'>
            <img className='skill-images' src={typescriptImage} alt="typescript"/>
            <h4 className='skill-image-title'>Typescript</h4>
          </div>
          <div className='tech-content-container'>
            <img className='skill-images' src={htmlImage} alt="html"/>
            <h4 className='skill-image-title'>HTML 5</h4>
          </div>
          <div className='tech-content-container'>
             <img className='skill-images' src={cssImage} alt="javascript"/>
             <h4 className='skill-image-title'>CSS 3</h4>         
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
            <div className='tech-content-container'>
              <img id="spring-boot-image" className='skill-images' src={springImage} alt="Spring Boot"/>
              <h4 className='skill-image-title'>Spring Boot</h4>
            </div>
            <div className='tech-content-container'>
               <img className='skill-images' src={reactjsImage} alt="React JS"/>
               <h4 className='skill-image-title'>React JS</h4>
            </div>
            <div className='tech-content-container'>
            <img style={{backgroundColor: "white", borderRadius: "25%"}} className='skill-images' src={materialuiImage} alt="MaterialUI"/>
            <h4 className='skill-image-title'>MaterialUI</h4>
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
          <div className='tech-content-container'>
            <img style={{backgroundColor: "white", borderRadius: "35%", marginLeft: "8px"}} className='skill-images' src={awsImage} alt="Amazon Web Services"/>
            <h4 className='skill-image-title'>Amazon Web Services</h4>
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
          <div className='tech-content-container'>
            <img style={{marginLeft: "8px"}} className='skill-images' src={postgresqlImage} alt="PostgreSQL"/>
            <h4 className='skill-image-title'>PostgreSQL</h4>
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
          <div className='tech-content-container'>
            <img style={{backgroundColor: "white", borderRadius: "25%", marginLeft: "8px"}} className='skill-images' src={githubImage} alt="Github"/>
            <h4 className='skill-image-title'>Github</h4>
          </div>
        </div>  
        </motion.div>
        )}
        
      </section>
      </div>
    </>
  )
}

export default About