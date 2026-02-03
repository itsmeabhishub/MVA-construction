import { Row, Col, Card, Typography } from "antd";
import "./Project.css";
import mallImg from "../../assets/mall.jpg";
import jamuiStn from "../../assets/download.jpg";
import lkrStn from "../../assets/lkr-station.jpg";
import home from "../../assets/house.jpg";
import { useEffect } from "react";

const { Title, Paragraph } = Typography;

const Project = () => {
  // Scroll animation (same pattern as Home)
  useEffect(() => {
    const rows = document.querySelectorAll(".project-row");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-page">
      {/* PAGE HEADER */}
      <Row justify="center" className="projects-header">
        <Col xs={24} md={18} lg={14} style={{ textAlign: "center" }}>
          <Title level={1}>Our Projects</Title>
          <Paragraph>
            A snapshot of our major construction projects delivered across
            railway infrastructure, commercial complexes, and urban development.
          </Paragraph>
        </Col>
      </Row>

      {/* PROJECT 1 */}
      <Row gutter={[32, 32]} align="middle" className="project-row">
        <Col xs={24} md={12}>
          <Card
            hoverable
            className="project-card"
            cover={<img src={jamuiStn} alt="Jamui Station" />}
          />
        </Col>
        <Col xs={24} md={12}>
          <Title level={3}>Jamui Railway Station Redevelopment</Title>
          <Paragraph>
            Redevelopment of passenger platforms, waiting halls, roofing, and
            circulation areas to improve safety, capacity, and commuter
            experience.
          </Paragraph>
        </Col>
      </Row>

      {/* PROJECT 2 */}
      <Row gutter={[32, 32]} align="middle" className="project-row reverse">
        <Col xs={24} md={12}>
          <Card
            hoverable
            className="project-card"
            cover={<img src={lkrStn} alt="Lakhisarai Station" />}
          />
        </Col>
        <Col xs={24} md={12}>
          <Title level={3}>Lakhisarai Railway Station Modernization</Title>
          <Paragraph>
            Modern station development including concourse expansion,
            commercial zones, drainage systems, and structural upgrades.
          </Paragraph>
        </Col>
      </Row>

      {/* PROJECT 3 */}
      <Row gutter={[32, 32]} align="middle" className="project-row">
        <Col xs={24} md={12}>
          <Card
            hoverable
            className="project-card"
            cover={<img src={mallImg} alt="City Mall" />}
          />
        </Col>
        <Col xs={24} md={12}>
          <Title level={3}>City Mall Commercial Complex</Title>
          <Paragraph>
            Multi-storey shopping mall featuring retail outlets, food courts,
            parking facilities, and modern architectural design.
          </Paragraph>
        </Col>
      </Row>

      {/* PROJECT 4 */}
      <Row gutter={[32, 32]} align="middle" className="project-row reverse">
        <Col xs={24} md={12}>
          <Card
            hoverable
            className="project-card"
            cover={<img src={home} alt="Residential Project" />}
          />
        </Col>
        <Col xs={24} md={12}>
          <Title level={3}>Urban Residential Development</Title>
          <Paragraph>
            Construction of high-quality residential homes with a strong focus
            on safety, durability, and modern living standards.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default Project;
