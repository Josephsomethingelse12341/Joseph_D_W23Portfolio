import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/quizhoot.png";
import projImg2 from "../assets/img/203878414-3f59bc6b-a39f-4722-9cb5-4b0a98d71a82.png";
import projImg3 from "../assets/img/empcrud.png";
import projImg4 from "../assets/img/chatapp.png";
import projImg5 from "../assets/img/TipCalculator.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "QuizHoot",
      description: "An app that contains quizzes and forums which provides a community based learning environment.",
      imgUrl: projImg1,
      link: "https://github.com/Jrdc12/QuizHoot"
    },
    {
      title: "Web Weather App",
      description: "Web app that works with a weather api.",
      imgUrl: projImg2,
      link: "https://github.com/Josephsomethingelse12341/101317769_comp3123_labtest2"
    },
    {
      title: "Simple Crud System",
      description: "For this assignment, we had to make a crud system, allowing users to login and signup. Letting them create, delete, update employees.",
      imgUrl: projImg3,
      link: "https://github.com/Josephsomethingelse12341/101317769_COMP3133_Assignment1"
    },
    {
      title: "Chat App",
      description: "For this test, we had to make a chat app, contains multiple chat rooms, login and register.",
      imgUrl: projImg4,
      link: "https://github.com/Josephsomethingelse12341/101317769_lab_test1_chat_app"
    },
    {
      title: "Tip Calculator",
      description: "In this app, we have a simple Tip calculator app.",
      imgUrl: projImg5,
      link: "https://github.com/Josephsomethingelse12341/gbc-comp2139-lab2"
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>This is a collection of some of the works I've done in School.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    </Tab.Content>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
