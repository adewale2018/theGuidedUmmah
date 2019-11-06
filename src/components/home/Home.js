import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Greeting from "../../img/gif/tenor3.gif";
import "./Home.css";

const Home = () => {
  return (
    <div className='Home'>
      <div className='Col-container'>
        <Container>
          <Row>
            <Col>
              <img src={Greeting} alt={"Greeting gif"} />
            </Col>

            <Col xs={6} className='Home-col'>
              <section>
                <div className='title-container'>
                  <h3>
                    <span className='arabic-lang'>﷽</span>
                    <span className='english-lang'>
                      You are Welcome To The Guided Ummah Website
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
              </section>
            </Col>
            <Col className='Home-col'>
              <img src={Greeting} alt={"Greeting gif"} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
