import React, { useState } from "react"; 
import Card from "../ui/Card";
import AuthAdmin from "../admin/AuthAdmin";
import AuthEmployee from "../employee/AuthEmployee";
import CopyRightText from "../ui/CopyRightText";
import chefImagee from "../ui/chefImage2.jpg";
import backgroundImage from "../ui/whitecanteen.jpg";

function Authentication(props) {
    const [role, setRole] = useState(null);
    const cardTitle = "Hungry Heaven";
    
    const onRoleClicked = (role) => {
        setRole(role);
        window.localStorage.setItem("ROLE", JSON.stringify(role));
    };

    const onBackClick = () => {
        setRole(null);
    };

    return (
        <React.Fragment>
            {/* Set Background Image for the Body */}
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                color: '#fff',
                position: 'relative', // Ensure background is positioned
                zIndex: 1
            }}>
                {/* Enhanced Bootstrap Navbar */}
                <nav className="navbar navbar-expand-lg" style={{ 
                    background: "#000000", 
                    zIndex: 4, // Higher z-index for the navbar
                    position: 'relative' 
                }}>
                    <a className="navbar-brand" href="#">
                        <span style={{ color: "#fff", fontWeight: "bold" }}>Hungry Heaven</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" style={{ color: "#fff" }}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "#fff" }}>Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "#fff" }}>Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ color: "#fff" }}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Main Authentication UI */}
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8">
                            <div style={{ 
                                position: 'relative', 
                                zIndex: 2 // Higher z-index for the card
                            }}>
                                <Card 
                                
                                    useTitleClass={true}
                                    title={cardTitle}
                                    background="#000000"
                                    textColor="#ded9ee"
                                >
                                    <div className="d-flex justify-content-center mb-4">
                                        { !role && (
                                            <img 
                                                src={chefImagee} 
                                                alt="Chef" 
                                                className="img-fluid" 
                                                style={{ width: "220px", borderRadius: "15px" }} 
                                            />
                                        )}
                                    </div>
                                    <div className="row">
                                        <AuthAdmin 
                                            role={role} 
                                            onBackClick={onBackClick} 
                                            onRoleClicked={onRoleClicked} 
                                            setAdminLoggedIn={props.setLoginAction}
                                            setAdminProfile={props.setLoggedInProfile}
                                        />
                                        <AuthEmployee 
                                            role={role} 
                                            onBackClick={onBackClick} 
                                            onRoleClicked={onRoleClicked} 
                                            setEmployeeLoggedIn={props.setLoginAction}
                                            setEmployeeProfile={props.setLoggedInProfile}
                                        />
                                    </div>
                                    <CopyRightText/>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Authentication;


