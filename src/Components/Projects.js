import React from 'react'
import weather_app from './weather_app.png'
import candidate_manager from './candidate_manager.png'
function Projects() {
    return (
        <div className="main-div">
            <div className='flex-container'>
                <div className="card1" style = {{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <img src={weather_app} className="card-img-top" alt="weather app" />
                    <div className="card-body1">
                        <h5 className="card-title1">Weather App</h5>
                        <p className="card-text1">Designed a weather app where user can enter the name of the city and it sends request to weather geo API for weather details. Then the API then sends us back the response which contains the weather information of that particular city.</p>
                        <a href="https://raghavweatherapp.netlify.app/" className="btn btn-primary" style={{borderRadius
                    : "50px"}}>Live Demo</a>
                    </div>
                </div>

                <div className="card2" style = {{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <img src={candidate_manager} className="card-img-top" alt="candidate manager" />
                    <div className="card-body2">
                        <h5 className="card-title2">Candidate Manager App</h5>
                        <p className="card-text2">Created a react based.application which uses CRUD operations stores the
                            personal details of Candidtes . User can edit and delete the records from the list
                            of candidtes displayed. Used Json-server , a fake rest api to store information
                            of candidates in the form of json</p>
                        <a href="https://candidatemanagement.netlify.app/" className="btn btn-primary" style={{borderRadius
                    : "50px"}}>Live Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;