import React, { useState } from "react";
import '../herosection.css';
import Navbar from './Navbar.jsx';
import { Link } from 'react-router-dom';
import Footer from "./Footer";
function HeroSection() {
    return (
        
        <header>
            <Navbar/>
            <div className = "head-text">
                <div className = "head-image">
                <img src = {require ('../images/heroimage2.jpg')} alt = "Freedom Blog" />
                </div>
                <div class='text-on-image'>
                    <h3>JNTUH UNIVERSITY COLLEGE OF ENGINEERING JAGTIAL (JNTUH UCEJ)</h3>
                    <p> Student Management System </p>
                </div>
            </div>
            <div className="row">
            <div className="column">
                <div className="inner">
                <h3>Welcome To Student Management System</h3>
                <p>University campus online automation system, is a recruitment system that is beneficial for a college student, 
                    college placement faculty and Companies visiting the campus.
                     This software has three login portal, for students, placement faculty and companies
                      visiting the campus. Students will enter all their personal as well as professional while 
                      registering 
                      themselves into the system.</p>
                </div>
            </div>
            <div className="column">
                 <img src="https://images.theconversation.com/files/433152/original/file-20211122-23-3or4zq.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C7856%2C5261&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" alt="" srcset="" />
                          
            </div>
            </div>
            
            <section class="mo-Cards section-title bg-raCustom">
            <h2 className="text-center mb-2">Online Services</h2>
           
            <div class="container">
                <div class="row">
                <Link to="/auth">
					<div className="col-md-4 col-sm-6 col-12 item mb-5">
                        
                      <div className="card item-card card-block ziom-block pt-4">
						  <img src="https://exams.jntuhcej.ac.in/student/new/images/icons/pg.png" alt="" class="img-fluid"></img>
                        <h5 className="card-title">Student</h5>
                        <p className="card-text text-left">&nbsp;</p> 
						
                      </div>
                    </div>
                    </Link>
                    <div className="col-md-4 col-sm-6 col-12 item mb-5">
					  <a  href="#" target="_blank">
                       <div className="card item-card card-block ziom-block pt-4">
                        <img src="https://exams.jntuhcej.ac.in/student/new/images/icons/parents.png" alt="" className="img-fluid"></img>
                        <h5 className="card-title">Parents</h5>
                        <p className="card-text">&nbsp;</p> 
						
                     </div>
					 </a>  
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 item mb-5">
					<a  href="#" target="_blank"> 
                      <div className="card item-card card-block ziom-block pt-4">
                        
						  <img src="https://exams.jntuhcej.ac.in/student/new/images/icons/faculty.png" alt="" className="img-fluid"></img>
                        <h5 className="card-title">Faculty</h5>
                        <p className="card-text">&nbsp;</p>
						
                      </div>
					  </a>
                    </div>  
                     
                         
                  </div>

                <div className="row">
					
					<div className="col-md-4 col-sm-6 col-12 item mb-5">
					    <a  href="#" target="_blank">
                        <div className="card item-card card-block ziom-block pt-4">
                          <img src="https://exams.jntuhcej.ac.in/student/new/images/icons/mou.png" alt="" className="img-fluid"></img>
                          <h5 className="card-title">Head of the Department</h5>
                          <p className="card-text">&nbsp;</p> 
                          
                        </div>
						</a>
                      </div> 
                    
					<div className="col-md-4 col-sm-6 col-12 item mb-5">
					  <a  href="#" target="_blank"> 
                      <div className="card item-card card-block ziom-block pt-4">
                        
						  <img src="https://exams.jntuhcej.ac.in/student/new/images/icons/library.png" alt="" className="img-fluid"></img>
                        <h5 className="card-title">Library</h5>
                        <p className="card-text">&nbsp;</p>
						
                      </div>
					  </a>
                    </div>
                    
                    <div className="col-md-4 col-sm-6 col-12 item mb-5">
					<a  href="#" target="_blank"> 
                      <div className="card item-card card-block ziom-block pt-4">
                        
						  <img src="https://exams.jntuhcej.ac.in/student/new/images/icons/examination.png" alt="" className="img-fluid"></img>
                        <h5 className="card-title">Examinations</h5>
                        <p className="card-text">&nbsp;</p>
						
                      </div>
					  </a>
                    </div>
					
					
                  </div>
            
				
            </div>  
        </section>
        <Footer/>
        </header>    
            
      );
}
export default HeroSection;