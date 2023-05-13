import React from 'react'
import resume from './Frontend Developer_resume.pdf'

function About() {
    return (
        <div className='about_section' style={{ display: 'flex' }}>
            <div className='animate__animated animate__bounceIn'>
                <div className="card" style={{ marginTop: '4%', borderRadius: '25px', width: '50% ', marginLeft: '25%', height: '75%', boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h5 className="card-title" style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>About Me</h5>
                        <p className="card-text">I am currently working at Cognizant as a UI developer having 1.1 years of experience.I am proficient in HTML, CSS, Javascript and React.</p>
                        <span className='card-text'>I work for a UK client called Network Rails. We are building a railway based website which enables the railway Section Managers and the admin to control the asset delivery management. Currently we are migrating the product from Javascript to React. I have experience working with UX and QA team . I have experience collaborating with the Business Analysts for discussions on the project requirement and design of the different features sprint wise.</span>
                        <a href='./Frontend Developer_resume.pdf' download={resume}>
                            <button type="button" class="btn btn-dark w-1">Download my resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;