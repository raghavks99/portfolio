import React from 'react'
import profile_photo from './my_photo.jpg';
import Typical from 'react-typical';

const Home = () => {
    return (
        <div className='main'>
            <div className="container">
                <div className="item1">
                    <span className='greeting'><Typical
                        loop={1}
                        steps={["Hello ! I am Karthikeyan Raghav", 2000]}
                    /></span>
                    <span className='typical'>
                        <Typical
                            loop={Infinity}
                            steps={["Enthusiastic Dev", 2000,
                                "Frontend Developer by profession", 2000,
                                "React developer by passion", 2000]}
                        />
                    </span>
                </div>
                <div className="item2">
                    <img src={profile_photo} style={{
                        width : '250px', borderRadius: '50%',
                        height: '250px',
                        marginBottom: '25px',
                        backgroundSize: 'cover',
                        border: '1vh solid #232d3622',
                        transition: '1s'
                    }} alt='proflie'/>
                </div>
            </div>
        </div>
    )
}
export default Home;