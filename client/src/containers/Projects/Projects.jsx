import React, { Component } from 'react';
import proInfo from "../Projects/proInfo";
import Card from "../Card/Card";
import NavTabs from "../NavBar/NavBar"
// import Footer from "../Footer/Footer"
// import Projects from "./containers/Projects"
// import PortCard from "../PortCard/PortCard"


// const Projects= () => {

//     console.log(proInfo)
//   return (
//     <div className="container">
//       <div className="row">
//       {proInfo.map((info) => (
//             <Card
//               title={proInfo.project_name}
//               src={proInfo.image}
//               bio={proInfo.about}
//               link={proInfo.link}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };
console.log(proInfo)
class Projects extends Component {
    render() {
        // console.log(proInfo)
        return (
            <div className="container">
                <div className="row">
                    <NavTabs />

                    {proInfo.map((array) => (
                        <Card
                            title={array.name}
                            src={array.image}
                            link={array.link}
                        />
                    )
                    )}

                    
    

                    </div>
                
            </div>
        );
    }
}

export default Projects;