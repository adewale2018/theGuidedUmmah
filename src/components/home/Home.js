import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Greeting from "../../img/gif/salam.gif";
import "./Home.css";
import PostsTitles from "./../posts/PostsTitles";

const Home = props => {
  return (
    <div className='Home'>
      <div className='Col-container'>
        <Container>
          <Row>
            <Col className='Home-col-sm'>
              <div className='Home-col-sm-1'>
                <div className='card'>
                  <img
                    className='card-img-top'
                    src={Greeting}
                    alt={"Greeting gif"}
                  />
                  <div className='Posts-title card-body'>
                    <PostsTitles posts={props.posts} />
                  </div>
                </div>
              </div>
            </Col>

            <Col className='Home-col'>
              <section>
                <div className='title-container'>
                  <h3>
                    <span className='arabic-lang'>بسم الله الرحمن الرحيم</span>
                    <span className='english-lang'>
                      You are Welcome To The Guided-Ummah Website
                    </span>
                  </h3>
                </div>

                <p>
                  This is a website meant for the entire muslims ummah. It is a
                  place to read about islam and the sunnah of the Prophet(SAW).
                  Not only this, there are inspiring posts that will keep
                  reminding us that we have limited time on this surface of the
                  earth. Consequently, there is need to continuosly prepare for
                  the hereafter. Allah says{" "}
                  <strong>
                    <em>
                      And worship your Lord until there comes to you the
                      certainty(death)
                    </em>
                  </strong>{" "}
                  Q15:99.{" "}
                </p>
                <Link to='/posts' className='btn btn-lg btn-outline-info' style={{marginTop: '5rem', fontSize: "2rem"}}>
                  ALL POSTS
                </Link>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
