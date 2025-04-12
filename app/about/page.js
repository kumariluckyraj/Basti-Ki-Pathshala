import Image from 'next/image';
import './about.css';

const About = () => {
  return (
    <>
      <div className="container" style={{ marginTop: '4em' }}>
        <section className="section-about">
          <div className="first">
            <h2>About AgniMundal</h2>
            <p style={{ textAlign: 'left' }}>
              AgniMUN is a prestigious Model United Nations conference dedicated to fostering global awareness and diplomatic skills among students.
              Our mission is to provide a platform for young leaders to engage in meaningful discussions on pressing global issues, develop their negotiation skills, and build lasting connections.
            </p>

            <div className="why" style={{ marginTop: '10em' }}>
              <h3 style={{ color: 'rgb(248, 119, 21)' }}>Why Attend AgniMUN?</h3>
              <p>Develop public speaking and negotiation skills.</p>
              <p>Gain a deeper understanding of international relations.</p>
              <p>Network with students from diverse backgrounds.</p>
              <p>Engage in stimulating debates and discussions.</p>
              <p>Experience the thrill of diplomacy.</p>
            </div>
          </div>

          <div className="second" style={{ textAlign: 'center' }}>
            <h2 className="hist">Our History</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>

          <div className="three">
            <section className="team-section">
              <h2>Our Team</h2>
              <div className="team-row">
                <div className="team-member">
                  <Image 
                    src="https://plus.unsplash.com/premium_photo-1661432963180-11f554ff1ced" 
                    alt="John Doe" 
                    width={300} 
                    height={300} 
                  />
                  <h3>John Doe</h3>
                  <p>President</p>
                </div>
                <div className="team-member">
                  <Image 
                    src="https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5" 
                    alt="Jane Smith" 
                    width={300} 
                    height={300} 
                  />
                  <h3>Jane Smith</h3>
                  <p>Vice President</p>
                </div>
                <div className="team-member">
                  <Image 
                    src="" 
                    alt="Alice Johnson" 
                    width={300} 
                    height={300} 
                  />
                  <h3>Alice Johnson</h3>
                  <p>Secretary</p>
                </div>
              </div>

              {/* Repeat for other team members as well */}
            </section>
          </div>
        </section>

        <div className="sec6">
          <section id="contact" className="content">
            <h2>Contact</h2>
            <p>Email: contact@mun.com</p>
            <p>Phone: 123-456-7890</p>
          </section>

          <footer className="foot">
            <div id="last">
              <section id="quick-links">
                <ul>
                  <h2>Quick Links</h2>
                  <li><a href="/home">Home</a></li>
                  <li><a href="/partners">Partners</a></li>
                  <li><a href="/programs">Programs</a></li>
                  <li><a href="/affiliate">Affiliate</a></li>
                  <li><a href="/volunteer">Volunteer</a></li>
                  <li><a href="/team">The Team</a></li>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/refund-policy">Refund Policy</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </section>

              <div className="logo-social-container">
                <div className="logo-img">
                  <Image 
                    src="https://img.icons8.com/?size=96&id=QTEnylAkMAkP&format=png" 
                    alt="logo" 
                    width={100} 
                    height={100} 
                  />
                </div>

                <section id="social-links">
                  <div>
                    <a href="YOUR_GITHUB_LINK" target="_blank" rel="noopener noreferrer">
                      <Image 
                        src="https://img.icons8.com/?size=96&id=AZOZNnY73haj&format=png" 
                        alt="GitHub" 
                        width={50} 
                        height={50} 
                      />
                    </a>
                    {/* Repeat for other social links */}
                  </div>
                  <p>&copy; 2025 AgniMundal</p>
                </section>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default About;
