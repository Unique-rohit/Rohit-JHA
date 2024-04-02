import React from 'react';
import Analytics from './Analytics';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="contsiner grid grid-two-cols">
            <div className="hero-content">
              <p></p>
              <h1>Why Choose Us?</h1>
              <p>
                Expertise: Our Team consist of experienced IT professionals who are passionate about staying
                up-to-date with the latest industry trends.
              </p>
              <br />
              <p>
                Customization: We understand that every business is unique. That's why
                we create solutions that are tailored to your specific need and goals.
              </p>
              <br />
              <p>
                Customer-centric approach: We prioritize your satisfaction and provide top-notch support to address your IT concerns.
              </p>
              <br />
              <p>
                Affordability: We offer competitive pricing without compromising on the quality of service.
              </p>
              <br />
              <p>
                Reliability: Count on us to be there when you need us. We are committed to ensuring your IT environment is reliable and available 24/7.
              </p>
              <br />
              <div className="btn btn-group">
                <NavLink to="/contactus">
                  <button className='btn'>Connect Now</button>
                </NavLink>
                <button className='btn secondary-btn'>Learn More</button>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/about.jpeg" alt="coding together with fun " width="400" height="500" />
            </div>
          </div>
        </section>
      </main>
      <Analytics /> {/* Ensure this is correctly imported and available */}
    </>
  );
};

export default About;
