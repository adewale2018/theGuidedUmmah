import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import img from "./../../img/al-imran.jfif";

const About = () => {
  return (
    <div className='About'>
      <div style={{ borderTop: "4px solid #fff" }}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#22a2ff'
            fillOpacity='0.5'
            d='M0,288L80,261.3C160,235,320,181,480,160C640,139,800,149,960,160C1120,171,1280,181,1360,186.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
          ></path>
        </svg>
      </div>
      <h1 className='text-center' id='main-title'>
        WHY THE GUIDED UMMAH WEBSITE?
      </h1>
      <div className='About-text container'>
        <p>
          All thanks and adorations is due to Allah. We seek His help and
          forgiveness, and we seek refuge in Allah from the evil within
          ourselves and the consequences of our evil deeds. Whoever Allah guides
          will never be led astray, and whoever Allah leads astray will never
          find guidance. I bear witness there is no God but Allah, alone without
          any partners, and I bear witness that Muhammad (peace and blessings be
          upon him) is His servant and His Messenger.
        </p>
        <p>
          Verily, the most truthful speech is the Book of Allah, the best
          guidance is the guidance of Muhammad (peace and blessings be upon
          him), and the worst of affairs are newly invented matters. Every newly
          invented matter is a religious innovation, and every religious
          innovation is misguidance, and every misguidance is in the Hellfire.
        </p>
        <p>
          The sole reason for this site is to propagate the religion of Allah,
          Islam. Allah says{" "}
          <span>
            <strong>
              <em>
                Indeed, the religion in the sight of Allah is Islam (Q3:19)
              </em>
            </strong>
          </span>
        </p>
        <Container className='text-center'>
          <Row>
            <Col>
              <div className='card'>
                <img src={img} className='card-img-top' alt={"Al-imran"} />
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    Indeed, the religion in the sight of Allah is Islam (Q3:19)
                  </li>
                  <li className='list-group-item'>
                    And whoever seeks a religion other than Islam, it will never
                    be accepted of him (Q3:85)
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="card">
              <div className="card-header">
                <h4 style={{textTransform: "uppercase", color: "#22a2ff", fontWeight: "700", letterSpacing: "0.2rem"}}>You will gain the following and lot more on this site in sha Allah</h4>
              </div>
              <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    Acquire more knowledge about Islam.
                  </li>
                  <li className='list-group-item'>
                    Learn about the sunnah of Prophet Muhammad (SAW)
                  </li>
                  <li className='list-group-item'>
                    Learn about the ways of life of the pious predeccessors
                  </li>
                  <li className='list-group-item'>
                    Read about the notable Sirohs and gain from the lessons derived from them
                  </li>
                  <li className='list-group-item'>
                    Have access to ask questions about Islam and the sunnah of the Prophet (SAW)
                  </li>
                  <li className='list-group-item'>
                    Read about marital relationship and parenting in Islam
                  </li>
                  <li className='list-group-item'>
                    And More! More!! More!!!
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ borderBottom: "4px solid #fff" }}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#22a2ff'
            fillOpacity='0.5'
            d='M0,288L80,261.3C160,235,320,181,480,160C640,139,800,149,960,160C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default About;
