import "./Home.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { urlPaths } from "../../routing/urlPaths";
import { useEffect } from "react";

const Home = () => {
  const { PROJECT_PATH, CONTACTUS_PATH } = urlPaths;
  const navigate = useNavigate();

  const redirectFunction = (e: string) => {
    if (e === "project") navigate(PROJECT_PATH);
    if (e === "contact") navigate(CONTACTUS_PATH);
  };

  // Scroll animation
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content animate-hero">
            <h1>
              Trusted Construction Partner <br />
              for Railway, Commercial & Residential Projects
            </h1>

            <p>
              Delivering infrastructure, commercial developments and
              quality housing projects with strong focus on safety,
              precision and on-time execution.
            </p>

            <div className="hero-actions">
              <Button
                type="primary"
                size="large"
                onClick={() => redirectFunction("project")}
              >
                View Our Projects
              </Button>
              <Button
                size="large"
                onClick={() => redirectFunction("contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stats-item animate-stat">5+ Years Experience</div>
        <div className="stats-item animate-stat">25+ Projects Delivered</div>
        <div className="stats-item animate-stat">Railway Expertise</div>
        <div className="stats-item animate-stat">North India Presence</div>
      </section>

      {/* ABOUT */}
      <section className="section animate-section">
        <h2>About MVA Constructions</h2>
        <p>
          MVA Constructions is an experienced construction firm executing
          railway infrastructure, commercial developments and residential
          housing projects across multiple regions.
        </p>
        <p>
          We follow strict quality standards, safety compliance and
          transparent project management practices to deliver
          reliable and long-lasting structures.
        </p>
      </section>

      {/* SERVICES */}
      <section className="section services animate-section">
        <h2>Our Core Services</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>Railway Infrastructure</h3>
            <p>
              Station redevelopment, passenger facilities,
              platform works and structural upgrades.
            </p>
          </div>

          <div className="service-card">
            <h3>Commercial Construction</h3>
            <p>
              Shopping malls, office buildings and commercial
              complexes built for long-term performance.
            </p>
          </div>

          <div className="service-card">
            <h3>Residential Construction</h3>
            <p>
              Quality residential homes and housing projects
              with focus on safety and durability.
            </p>
          </div>
        </div>
      </section>

      
      {/* HOW IT WORKS */}
<section className="how-it-works animate-section">
  <h2 className="how-title">How It Works</h2>
  <p className="how-subtitle">
    Simple, transparent, and hassle-free construction process
  </p>

  <div className="timeline">
    {/* STEP 1 */}
    <div className="timeline-item left">
      <span className="step-number">01</span>
      <h3>Technical Consultation</h3>
      <p>
        Share your vision with our experienced team. We understand
        your requirements and guide you with the right approach.
      </p>
    </div>

    {/* STEP 2 */}
    <div className="timeline-item right">
      <span className="step-number">02</span>
      <h3>Booking</h3>
      <p>
        Secure your project by confirming the scope and finalizing
        documentation with complete transparency.
      </p>
    </div>

    {/* STEP 3 */}
    <div className="timeline-item left">
      <span className="step-number">03</span>
      <h3>Design & Planning</h3>
      <p>
        Our architects and engineers create detailed plans aligned
        with your vision and functional needs.
      </p>
    </div>

    {/* STEP 4 */}
    <div className="timeline-item right">
      <span className="step-number">04</span>
      <h3>Home Construction</h3>
      <p>
        Execution begins with strict quality checks, safety standards,
        and regular progress updates.
      </p>
    </div>

    {/* STEP 5 */}
    <div className="timeline-item left">
      <span className="step-number">05</span>
      <h3>Move-In</h3>
      <p>
        Project handover with quality assurance and long-term
        support for complete peace of mind.
      </p>
    </div>
  </div>
</section>

      {/* WHY US */}
      <section className="section animate-section whySection">
        <h2 className="whyHeader">Why Choose MVA Constructions</h2>

        <div className="why-grid">
          <div className="why-item">✔ Railway & Infra Experience</div>
          <div className="why-item">✔ Skilled Engineering Team</div>
          <div className="why-item">✔ Safety & Quality Focus</div>
          <div className="why-item">✔ Transparent Delivery</div>
          <div className="why-item">✔ Trusted Clients</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta animate-section">
        <h2>Looking for a Reliable Construction Partner?</h2>
        <p>
          Connect with MVA Constructions to discuss your
          project requirements and execution strategy.
        </p>

        <Button
          type="primary"
          size="large"
          onClick={() => redirectFunction("contact")}
        >
          Get in Touch
        </Button>
      </section>
    </div>
  );
};

export default Home;
