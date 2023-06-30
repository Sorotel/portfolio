import React, { useEffect } from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import styles from "./projects.module.css";
import imgproj1 from "../../assets/img/SabuesoPerdioSuHueso.png";
import imgproj2 from "../../assets/img/footshopHomePage.png";
import { ArrowRightCircle } from "react-bootstrap-icons";

function Projects() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.project} id="projects">
      <Container>
        <Row>
          <Col>
            <div className="" data-aos="flip-left">
              <h2>Proyectos</h2>
              <p>
                Algunos proyectos en los cuales trabajé y pude desarrollar de
                manera freelance. Donde me pude desempeñar en algunos como
                Fullstack y otros como Frontend.
              </p>
            </div>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {/* {
                            projects.map((pro, i) => {
                                return (
                                    <ProjectCard 
                                    key={i}
                                    title={pro.title}
                                    description={pro.description}
                                    imgUrl={pro.imgUrl}
                                    // github={pro.github}
                                    // deploy={pro.deploy}
                                    // {...pro} 
                                    />
                                )
                            })
                            } */}
                    <Col sm={6} md={4}>
                      <div className={styles.projimgbx} data-aos="flip-up">
                        <img
                          src={imgproj1}
                          alt="img card"
                          className="img-fluid"
                        />
                        <div className={styles.projtxtx}>
                          <h4>Sabueso perdio su Hueso</h4>
                          <span>
                            "Aplicación de Raza de perros donde se pueden realizar
                            búsquedas, filtrados, ordenamientos y creación de
                            los mismos."
                          </span>
                          <div>
                            <a href="https://github.com/Sorotel/dogs-pi-soyhenry">
                              <button className={styles.buttonCard}>
                                Repo <ArrowRightCircle size={25} />
                              </button>
                            </a>
                            <a href="a">
                              <button className={styles.buttonCard}>
                                Deploy <ArrowRightCircle size={25} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4}>
                      <div className={styles.projimgbx} data-aos="flip-up">
                        <img
                          src={imgproj2}
                          alt="img card"
                          className="img-fluid"
                        />
                        <div className={styles.projtxtx}>
                          <h4>Footshop</h4>
                          <span>
                            "E-commerce desarrollado con la idea principal E-commerce desarrollado con  idea principal 
de vender calzados de caracter exclusivo "
                          </span>
                          <div>
                            <a href="https://github.com/HenryPG13">
                              <button className={styles.buttonCard}>
                                Repo <ArrowRightCircle size={25} />
                              </button>
                            </a>
                            <a href="https://henry-pf-front-end.vercel.app">
                              <button className={styles.buttonCard}>
                                Deploy <ArrowRightCircle size={25} />
                              </button>
                            </a>
                            <a href="a">
                              <button className={styles.buttonCard}>
                                Video <ArrowRightCircle size={25} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                   
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className={styles.backgroundimageright}
        src={colorSharp2}
        alt="img bg"
      />
    </section>
  );
}

export default Projects;
