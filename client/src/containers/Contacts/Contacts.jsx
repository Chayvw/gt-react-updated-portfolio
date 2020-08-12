import React, { Component } from 'react';
import NavTabs from "../NavBar/NavBar"
// import Footer from '../Footer/Footer';

class Contacts extends Component {
    render() {
        return (
            <div>
                <NavTabs />
                <h1>This is my Contact page</h1>
                {/* <Footer /> */}
            </div>
           
        );
    }
}

export default Contacts;