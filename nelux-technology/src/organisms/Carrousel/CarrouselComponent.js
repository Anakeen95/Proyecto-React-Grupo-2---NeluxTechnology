import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from './Carrousel.module.css';

const CarrouselComponent = () => {
  return (
    <section className={styles.sectionCarrousel}>
      <div className={styles.textInstagram}><h3>@NeluxTechnology en Instagram</h3></div>
      <section className={styles.carrouselContainer}>
        <Carousel className={styles.carrousel} indicators={false}>
          <Carousel.Item>
            <Container fluid>
              <Row className={styles.rows}>
                <Col xs={6} md={4} lg={3} className={styles.carrouselImg}>
                  <img className="d-block w-100" src="./images/Inta-photo-1.jpeg" alt="First slide image 1" />
                </Col>
                <Col xs={6} md={4} lg={3} className={styles.carrouselImg}>
                  <img className="d-block w-100" src="./images/Inta-photo-2.jpeg" alt="First slide image 2" />
                </Col>
                <Col xs={6} md={4} lg={3} className={`d-none d-md-block ${styles.carrouselImg}`}>
                  <img className="d-block w-100" src="./images/Inta-photo-3.jpeg" alt="First slide image 3" />
                </Col>
                <Col xs={6} md={4} lg={3} className={`d-none d-lg-block ${styles.carrouselImg}`}>
                  <img className="d-block w-100" src="./images/Inta-photo-4.jpeg" alt="First slide image 4" />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container fluid>
              <Row className={styles.rows}>
                <Col xs={6} md={4} lg={3} className={styles.carrouselImg}>
                  <img className="d-block w-100" src="./images/Inta-photo-5.jpeg" alt="Second slide image 1" />
                </Col>
                <Col xs={6} md={4} lg={3} className={styles.carrouselImg}>
                  <img className="d-block w-100" src="./images/Inta-photo-6.jpeg" alt="Second slide image 2" />
                </Col>
                <Col xs={6} md={4} lg={3} className={`d-none d-md-block ${styles.carrouselImg}`}>
                  <img className="d-block w-100" src="./images/Inta-photo-7.jpeg" alt="Second slide image 3" />
                </Col>
                <Col xs={6} md={4} lg={3} className={`d-none d-lg-block ${styles.carrouselImg}`}>
                  <img className="d-block w-100" src="./images/Inta-photo-8.jpeg" alt="Second slide image 4" />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item>
            <Container fluid>
              <Row className={styles.rows}>
                <Col xs={6} md={4} lg={3} className={styles.carrouselImg}>
                  <img className="d-block w-100" src="./images/Inta-photo-9.jpeg" alt="Third slide image 1" />
                </Col>
                <Col xs={6} md={4} lg={3} className={styles.carrouselImg}>
                  <img className="d-block w-100" src="./images/Inta-photo-10.jpeg" alt="Third slide image 2" />
                </Col>
                <Col xs={6} md={4} lg={3} className={`d-none d-md-block ${styles.carrouselImg}`}>
                  <img className="d-block w-100" src="./images/Inta-photo-11.jpeg" alt="Third slide image 3" />
                </Col>
                <Col xs={6} md={4} lg={3} className={`d-none d-lg-block ${styles.carrouselImg}`}>
                  <img className="d-block w-100" src="./images/Inta-photo-12.jpeg" alt="Third slide image 4" />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </section>
    </section>
  );
}

export default CarrouselComponent;
