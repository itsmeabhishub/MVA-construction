import "./Home.css";
import { Button, Row, Col, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { urlPaths } from "../../routing/urlPaths";
const Home = () => {
  const { PROJECT_PATH, CONTACTUS_PATH } = urlPaths;
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-badge">Trusted Since 2020</span>
            <h1>
              MVA Construction and Infratech <br />
              Building Quality Infrastructure
            </h1>
            <p>
              Delivering railway, commercial, and residential construction
              projects with trust, transparency, and timely execution.
            </p>

            <div className="hero-actions">
              <Button
                type="primary"
                size="large"
                onClick={() => navigate(CONTACTUS_PATH)}
              >
                Contact Us
              </Button>
              <Button size="large" onClick={() => navigate(PROJECT_PATH)}>
                View Projects
              </Button>
            </div>

            <div className="hero-stats">
              <div>
                <h3>25+</h3>
                <span>Projects Delivered</span>
              </div>
              <div>
                <h3>5+</h3>
                <span>Years Experience</span>
              </div>
              <div>
                <h3>100%</h3>
                <span>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section light">
        <h2 className="section-title">Who We Serve</h2>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} md={6}>
            <Card className="serve-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566953/railway_fypltc.png' alt="Railway" />
              <h3>Railway Infrastructure</h3>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card className="serve-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770567805/commerical_lkbrtz.jpg' alt="Commercial" />
              <h3>Commercial Complexes</h3>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card className="serve-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770568226/Residential_n5dll2.jpg' alt="Residential" />
              <h3>Residential Housing</h3>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card className="serve-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566953/urbanDev_utqcg5.webp' alt="Urban" />
              <h3>Urban Development</h3>
            </Card>
          </Col>
        </Row>
      </section>

      {/* SERVICES */}
      <section className="section light">
        <h2 className="section-title">Our Services</h2>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={6}>
            <Card className="service-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566953/railway_fypltc.png' alt="Railway" />
              <h3>Railway Projects</h3>
              <p>Station redevelopment & infrastructure works.</p>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card className="service-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566196/bridge_cj4qll.jpg' alt="Commercial" />
              <h3>Commercial Construction</h3>
              <p>Malls, offices, and commercial complexes.</p>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card className="service-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770568226/Residential_n5dll2.jpg' alt="Residential" />
              <h3>Residential Construction</h3>
              <p>Quality homes with modern living standards.</p>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card className="service-card">

              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770567772/maintaince_h6yhlg.jpg' alt="Maintenance" />
              <h3>Maintenance</h3>
              <p>Long-term property & infrastructure maintenance.</p>
            </Card>
          </Col>
        </Row>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section dark">
        <h2 className="section-title light-text">
          Why Choose MVA Construction and Infratech

        </h2>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <Card className="why-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566951/pricing_fjyjus.jpg' alt="Pricing" />
              <h3>Competitive Execution</h3>
              <p>Efficient planning with cost control.</p>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="why-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566950/logistic_yastxx.jpg' alt="Logistics" />
              <h3>Reliable Metrail Delivery</h3>
              <p>On-time completion with quality checks.</p>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="why-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566952/supportI_u3ohgj.png' alt="Logistics" />
              <h3>Dedicated Support</h3>
              <p>Transparent communication & monitoring.</p>
            </Card>
          </Col>
        </Row>
      </section>

      {/* HOW IT WORKS */}
      <section className="section light">
        <h2 className="section-title">How It Works</h2>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} md={6}>
            <Card className="step-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566950/infraPalning_zhlnf3.jpg' alt="Consult" />
              <h3>Consultation</h3>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card className="step-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566952/planning_grpql4.avif' alt="Plan" />
              <h3>Planning</h3>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card className="step-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566950/build_chgrj6.avif' alt="Build" />
              <h3>Execution</h3>
            </Card>
          </Col>
        </Row>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Start Your Project?</h2>
        <p>Partner with MVA Construction and Infratech for reliable execution.</p>
        <Button
          type="primary"
          size="large"
          onClick={() => navigate(CONTACTUS_PATH)}
        >
          Get in Touch
        </Button>
      </section>
    </div>
  );
};

export default Home;
