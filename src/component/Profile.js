import {Container, Row} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import "../styles/Profile.css";

function Profile() {
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <div className="col-lg-6 col-sm-6">
                    <div className="card hovercard">
                        <div className="cardheader"/>
                        <div className="avatar">
                            <img alt=""
                                 src="https://media-exp1.licdn.com/dms/image/C5103AQGyTtJAbqz2og/profile-displayphoto-shrink_100_100/0/1579146369976?e=1616630400&v=beta&t=Qz2rSsqBT3M4WWG5F8QQsTR3oz0Ki0ncs6hd2KU3QFo"/>
                        </div>
                        <div className="info">
                            <div className="title">
                                <h5>CATUR ANANTA PUTRA</h5>
                            </div>
                            <div className="desc">caturanantaa@gmail.com</div>
                            <div className="desc">Fullstack Developer</div>
                            <div className="desc">Buat yang baca ini semoga hari kamu bahagia ^^</div>
                            <a className="desc"  style={{color:'blue'}} href="https://itschad.site/">CV Online</a>
                        </div>
                        <div className="bottom p-3">
                            <a className="btn btn-dark btn-twitter btn-sm m-1" href="https://github.com/caturananta">
                                <i className="fa fa-github"></i>
                            </a>
                            <a className="btn btn-primary btn-sm m-1" rel="publisher"
                               href="https://www.linkedin.com/in/catur-ananta-putra-bb7797164/">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a className="btn btn-danger btn-sm m-1" rel="publisher"
                               href="https://www.instagram.com/catur_ananta/">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Profile