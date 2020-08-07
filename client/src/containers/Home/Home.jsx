import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <h2>About Me</h2>
                        <hr />
                        <img id="aboutme-img" src="assets/images/IMG_4240.jpg" alt="Chay Williams"></img>
                        <p>
                            Thank you for visiting my web site. I am Full Stack Developer who utilizes outside of the box thinking to improve the user experience.
                            Recent graduate of the Georgia Tech Full Stack program where I got the opportunity to obtain skills in  responsive web design HTML, CSS, Javascript, jQuery, REST api, and making
                            AJAX calls. Developed skills on initiating ideas, pseudocoding my process and coordinating my task when creating apps.
                            Completed several projects as part of a team remotely while utilizing terminal and Github.
                              Excited to bring my skill set to a team and utilize accumulated skills. </p>

                    </div>
                </div>

            </div>


        );
    }
}

export default Home;