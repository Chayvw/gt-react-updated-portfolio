import React, { Component } from 'react';
import NavTabs from "../NavBar/NavBar"
// import Footer from '../Footer/Footer';

class Contacts extends Component {
    render() {
        return (
            <div>
                 <NavTabs />
            <div className="container" id="Contact">
                <h2>Contact Information</h2>
                <hr />
                <div className="row">
                    <div className="column">
                        <label>Phone: 678-999-1111</label>
                        <div>
                            <label>E-Mail: chayvw@gmail.com</label>
                        </div>
                    </div>
                </div>
            </div>
           
           </div>
        );
    }
}

export default Contacts;