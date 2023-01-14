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


                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Cleven Nesello</span>
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
                                        1000,
                                        "Mongo, Express , React and Node",
                                        1000,
                                        "Mongo, Express, Angular and Node",
                                        1000,
                                        "C# - Asp.NET CORE & React",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Building application with front and back end operations
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire me{" "}
                        </button>
                        <a href='Profile.pdf' download='Cleven Profile.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
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
