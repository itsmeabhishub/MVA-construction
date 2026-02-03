import React from 'react'
import './Home.css'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { urlPaths } from '../../routing/urlPaths';

const Home = () => {
    const { PROJECT_PATH, CONTACTUS_PATH } = urlPaths
    const navigate = useNavigate()
    const redirectFunction = (e:string) => {

        if (e === 'project') {
            navigate(PROJECT_PATH)
        }
        if (e === 'contact') {
            navigate(CONTACTUS_PATH)
        }
    }
    return (
        <div className="home">
            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1>MVA Constructions</h1>
                        <p>
                            Building strong foundations, modern spaces, and reliable
                            infrastructure with quality, safety, and trust.
                        </p>

                        <div className="hero-actions">
                            <Button type="primary" size="large" onClick={() => redirectFunction('contact')}>
                                Contact Us
                            </Button>
                            <Button size="large" onClick={() => redirectFunction('project')}>Our Projects</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="section">
                <h2>Who We Are</h2>
                <p>
                    MVA Constructions is a professional construction company specializing
                    in residential, commercial, and infrastructure projects. We are known
                    for quality execution, transparent processes, and on-time delivery.
                </p>
            </section>

            {/* SERVICES */}
            <section className="section services">
                <h2>Our Services</h2>

                <div className="service-grid">
                    <div className="service-card">
                        <h3>Residential Construction</h3>
                        <p>
                            Independent houses, apartments, and housing projects built with
                            modern designs and durable materials.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>Commercial Projects</h3>
                        <p>
                            Office buildings, retail spaces, and commercial complexes designed
                            for growth and efficiency.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>Renovation & Remodeling</h3>
                        <p>
                            Structural upgrades, interior renovations, and modernization of
                            existing buildings.
                        </p>
                    </div>

                    <div className="service-card">
                        <h3>Infrastructure Works</h3>
                        <p>
                            Roads, drainage, and public infrastructure executed with safety
                            and compliance.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY US */}
            <section className="section">
                <h2>Why Choose MVA Constructions</h2>

                <div className="why-grid">
                    <div className="why-item">✔ Quality Materials & Workmanship</div>
                    <div className="why-item">✔ Timely Project Delivery</div>
                    <div className="why-item">✔ Experienced Engineers</div>
                    <div className="why-item">✔ Transparent Pricing</div>
                    <div className="why-item">✔ Safety & Compliance</div>
                    <div className="why-item">✔ Customer Satisfaction</div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <h2>Ready to Start Your Project?</h2>
                <p>
                    Get in touch with MVA Constructions today for expert consultation and
                    project planning.
                </p>

                <Button type="primary" size="large" disabled>
                    Get Free Consultation
                </Button>
            </section>
        </div>
    );

}

export default Home