import {
  Row,
  Col,
  Card,
  Typography,
  Button,
  Form,
  Input,
  Divider,
} from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import "./ContactUs.css";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* PAGE HEADER */}
      <Row justify="center" className="contact-header">
        <Col xs={24} md={16} style={{ textAlign: "center" }}>
          <Title level={1}>Get in Touch</Title>
          <Paragraph>
            We’re here to help with your construction inquiries and project
            discussions.
          </Paragraph>
        </Col>
      </Row>

      {/* CONTACT ACTION CARDS */}
      <Row gutter={[24, 24]} justify="center" className="contact-actions">
        {/* CALL */}
        <Col xs={24} md={7}>
          <Card className="contact-action-card" bordered={false}>
            <PhoneOutlined className="action-icon phone" />
            <Title level={4}>Call Us</Title>
            <Paragraph>+91 9123497478</Paragraph>
            <Button
              type="primary"
              href="tel:+919123497478"
              block
            >
              Call Now
            </Button>
          </Card>
        </Col>

        {/* WHATSAPP */}
        <Col xs={24} md={7}>
          <Card className="contact-action-card" bordered={false}>
            <WhatsAppOutlined className="action-icon whatsapp" />
            <Title level={4}>WhatsApp</Title>
            <Paragraph>Chat with us instantly</Paragraph>
            <Button
              type="primary"
              href="https://wa.me/919123497478"
              target="_blank"
              block
            >
              Open WhatsApp
            </Button>
          </Card>
        </Col>

        {/* EMAIL */}
        <Col xs={24} md={7}>
          <Card className="contact-action-card" bordered={false}>
            <MailOutlined className="action-icon email" />
            <Title level={4}>Email Us</Title>
            <Paragraph>mvaconstructioninfratech@gmail.com</Paragraph>
            <Button
              type="primary"
              href="mailto:mvaconstructioninfratech@gmail.com"
              block
            >
              Send Email
            </Button>
          </Card>
        </Col>
      </Row>

      {/* SEND MESSAGE + OFFICE DETAILS */}
      <Row gutter={[32, 32]} justify="center" className="message-section">
        {/* SEND MESSAGE */}
        <Col xs={24} md={10}>
          <Card title="Send Us a Message" bordered={false}>
            <Form layout="vertical" disabled>
              <Form.Item label="Full Name" required>
                <Input placeholder="Enter your name" />
              </Form.Item>

              <Form.Item label="Email Address" required>
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item label="Contact Number">
                <Input placeholder="Enter your phone number" />
              </Form.Item>

              <Form.Item label="Message" required>
                <TextArea rows={4} placeholder="Write your message here" />
              </Form.Item>

              <Button type="primary" size="large" block disabled>
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>

        {/* OFFICE DETAILS */}
        <Col xs={24} md={10}>
          <Card title="Our Office" bordered={false}>
            <Paragraph>
              <EnvironmentOutlined /> <strong>Address</strong>
            </Paragraph>
            <Paragraph>
              MVA Constructions <br />
              Station Road, Satgama <br />
              Jamui, Bihar – 811307
            </Paragraph>

            <Divider />

            <Paragraph>
              <PhoneOutlined /> <strong>Phone</strong>
            </Paragraph>
            <Paragraph>+91 9123497478</Paragraph>

            <Divider />

            <Paragraph>
              <MailOutlined /> <strong>Email</strong>
            </Paragraph>
            <Paragraph>mvaconstructioninfratech@gmail.com</Paragraph>

            <Divider />

            <Paragraph>
              <ClockCircleOutlined /> <strong>Working Hours</strong>
            </Paragraph>
            <Paragraph>
              Monday – Saturday <br />
              9:00 AM – 6:00 PM
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* MAP SECTION */}
      <Row justify="center" className="map-section">
        <Col xs={24} md={20}>
          <Card title="Our Location" bordered={false}>
            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10708.91070171851!2d86.2277874116096!3d24.94113049274595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssatgama%20jamui!5e0!3m2!1sen!2sin!4v1770033836081!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
