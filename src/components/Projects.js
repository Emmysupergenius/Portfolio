import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

    const projects = [
        {
            title: "Ecommerce Website",
            description: "Build & Development",
            imgUrl: projImg1,
        },
        {
            title: "Ecommerce Website",
            description: "Build & Development",
            imgUrl: projImg2,
        },
        {
            title: "Ecommerce Website",
            description: "Build & Development",
            imgUrl: projImg3,
        },
        {
            title: "Ecommerce Website",
            description: "Build & Development",
            imgUrl: projImg4,
        },
        {
            title: "Ecommerce Website",
            description: "Build & Development",
            imgUrl: projImg5,
        },
        {
            title: "Ecommerce Website",
            description: "Build & Development",
            imgUrl: projImg6,
        },
    ];

    const project2 = [
        {
            title: "Tasks Tracker",
            description: "Build & Development",
            imgUrl: projImg7,
        },
        {
            title: "Tasks Tracker",
            description: "Build & Development",
            imgUrl: projImg8,
        },
        {
            title: "Tasks Tracker",
            description: "Build & Development",
            imgUrl: projImg9,
        },
    ];


    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__bounces" : ""}>
                    <h2>Projects</h2>
                    <h2>Take a look at my projects bellow</h2>
                    <h2>Don't forget to visit my github page for more projects.</h2>
                    
                    <Tab.Container id="projects-tab" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
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
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        project2.map((project, index) => {
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
                            <Tab.Pane eventKey="first">
                               <h2>Build a responsive Ecommerce shoping website.</h2>
                               <h2>For more about this Ecommerce shopping website, <br />   
                                   <a href="https://emmysupergenius.github.io/E-commerce-website/">Visit</a>
                               </h2>
                               
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h2>A task tracker app where you can track your activities to be carried out at any day and you'll be notified like an alarm on the D-day</h2>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <h2>For more projects visit my github page bellow</h2>
                                <a href="https://github.com/Emmysupergenius"><h1>Github</h1></a>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
}