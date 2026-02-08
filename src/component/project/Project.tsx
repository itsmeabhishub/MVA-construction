import { Row, Col, Card, Typography } from "antd";
import "./Project.css";

const { Title, Paragraph } = Typography;

const Project = () => {
  return (
    <div className="project-page">
      {/* HEADER SECTION */}
      <section className="project-header">
        <Row align="middle" gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Title className="project-header-title">
              Our Work. <span>Your Vision Realized.</span>
            </Title>
            <Paragraph className="project-header-desc">
              Every project we deliver is a story of trust, engineering
              excellence, and timely execution. From railway infrastructure and
              highways to commercial and residential developments, our work
              reflects long-term value and quality.
            </Paragraph>
          </Col>

          <Col xs={24} md={12}>
            <div className="project-header-images">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566952/JmuRailway_q3gusu.png' alt="Railway Project" />
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566196/bridge_cj4qll.jpg' alt="Bridge Project" />
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566952/highway_uujq8x.jpg' alt="Highway Project" />
            </div>
          </Col>
        </Row>
      </section>

      {/* PROJECT LIST */}
      <section className="project-list">
        <Row gutter={[24, 32]}>
          <Col xs={24} md={8}>
            <Card hoverable className="project-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566952/JmuRailway_q3gusu.png' alt="Jamui Station" />
              <Title level={4}>Jamui Railway Station</Title>
              <Paragraph>
                Redevelopment of platforms, roofing systems, passenger amenities,
                and circulation areas to enhance safety and commuter experience.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable className="project-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770569091/WhatsApp_Image_2026-02-03_at_10.47.35_s2g6t5.jpg' alt="Lakhisarai Station" />
              <Title level={4}>Lakhisarai Railway Station</Title>
              <Paragraph>
                Modernization of station infrastructure including concourse
                expansion, drainage improvements, and structural upgrades.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable className="project-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566952/highway_uujq8x.jpg' alt="Highway Construction" />
              <Title level={4}>Highway Construction</Title>
              <Paragraph>
                Construction of high-quality highways with reinforced pavement,
                drainage systems, and traffic safety compliance.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable className="project-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770566196/bridge_cj4qll.jpg' alt="Bridge Project" />
              <Title level={4}>Bridge & Flyover Projects</Title>
              <Paragraph>
                Execution of bridge and flyover works with strong foundations,
                durable structures, and long-term safety planning.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable className="project-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770572868/mall11_wtd5be.jpg' alt="Commercial Complex" />
              <Title level={4}>Commercial Complex</Title>
              <Paragraph>
                Multi-storey commercial buildings including shopping complexes,
                office spaces, and modern architectural layouts.
              </Paragraph>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card hoverable className="project-card">
              <img src='https://res.cloudinary.com/dikezuoz5/image/upload/v1770568226/Residential_n5dll2.jpg' alt="Residential Housing" />
              <Title level={4}>Residential Housing</Title>
              <Paragraph>
                Quality residential housing projects built with focus on safety,
                durability, modern design, and efficient space utilization.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Project;
