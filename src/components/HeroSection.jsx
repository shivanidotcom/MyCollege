import React, { useState } from "react";
import '../herosection.css';
function HeroSection() {
    return (
        <header>
            <div className = "head-text">
                <div className = "head-image">
                <img src = {require ('../images/heroimage2.jpg')} alt = "Freedom Blog" />
                </div>
                <div class='text-on-image'>
                    <h3>JNTUH UNIVERSITY COLLEGE OF ENGINEERING JAGTIAL</h3>
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

        
        </header>
        
    
      );
}
export default HeroSection;