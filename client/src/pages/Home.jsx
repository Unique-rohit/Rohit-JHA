import React from 'react';
import '../assets/index.css'
import Analytics from './Analytics';

const Home = () => {
  return (
      <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are worlds best IT Company</p>
              <h1>Welcome to Rohit Channel</h1>
              <p>
                Are you ready to take the business to next level with 
                cutting-edge IT solutions?Look no further!At Rohit Jha,
                we specialize in providing innovative IT services and solution tailored to meet unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contactus">
                  <button className='btn'>Connect now</button>
                </a>
                <a href="/services">
                  <button className='btn secondary-btn'>Learn now</button>
                </a>
              </div>
            </div>
            {/* hero image */}
            <div className="hero-image">
              <img src="/images/ro.jpg" alt="coding together with fun " width="400" height="500" />
            </div>
          </div>
        </section>

        {/* 2nd section */}
      <Analytics/>
        {/* 3d section */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            
             {/* hero image */}
             <div className="hero-image">
              <img src="/images/design.jpeg" alt="coding together with fun " width="400" height="500" />
            </div>
         
            
            <div className="hero-content">
              <p>We are worlds best IT Company</p>
              <h1>Get Started Today</h1>
              <p>
                Are you ready to take the business to next level with 
                cutting-edge IT solutions?Look no further!At Rohit Jha,
                we specialize in providing innovative IT services and solution tailored to meet unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contactus">
                  <button className='btn'>Connect now</button>
                </a>
                <a href="/services">
                  <button className='btn secondary-btn'>Learn now</button>
                </a>
              </div>
            </div>
            </div>
        </section>
      </main>
      
      </>
  );
};

export default Home;
