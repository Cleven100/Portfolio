import React from 'react'
import Typical from 'react-typical'
import './Profile.css'


export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.linkedin.com/in/cleven-nesello/'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                            <a href='https://github.com/Cleven100'>
                                <i className='fa fa-github'></i>
                            </a>
                        </div>

                    </div>

                  <h2 className='text-h2'>Hello, I'm</h2>
                  
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            
                           
                                <span className='highlighted-texts'>
                                     <ul>
                                     <li>C</li>
                                     <li>L</li>
                                     <li>E</li>
                                     <li>V</li>
                                     <li>E</li>
                                     <li>N</li>
                                    
                                     <li className="spacing">NESELLO</li>
                                     
                                   
                                     <div className='clear'></div>
                                     </ul>
                                </span>
                           
                             
                        </span>
                    </div>
                    <div className='profile-datails-role'>
                        <span className='primary-text'>
                            {
                                ""
                            } <h1>
                                {""}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Full Stack Development",
                                        3000,
                                        "Mongo, Express , React and Node",
                                        3000,
                                        "C# - Asp.NET CORE & React",
                                        3000,
                                    ]}
                                />
                            </h1>
                            
                            <span className='profile-role-tagline'>
                            Engineering a web application that handles both front-end and back-end processes
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn-custom primary-btn '>
                            {""}
                            I'm available for hire{" "}
                        </button>
                        <a href='Profile.pdf' download='Cleven Profile.pdf'>
                            <button className='btn-custom-get'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}
