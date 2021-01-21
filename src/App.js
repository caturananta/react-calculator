import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav} from 'react-bootstrap';
import Profile from "./component/Profile";
import Calculator from "./component/Calculator";

function App() {
    const [profile, setProfile] = useState(false)

    return (
        <Container fluid>
            <Nav className="justify-content-center mt-3">
                <Nav.Item>
                    <Nav.Link onClick={() => {
                        setProfile(true)
                    }}>PROFIL</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {
                        setProfile(false)
                    }}>KALKULATOR</Nav.Link>
                </Nav.Item>
            </Nav>
            {
                profile ? <Profile/> : <Calculator/>
            }
        </Container>
    );
}

export default App;
