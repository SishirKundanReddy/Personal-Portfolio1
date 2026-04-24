import face from "../images/face.jpeg";
export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-left">
          <span className="hero-tag">Computer Science Engineer</span>
          <h1 className="hero-greeting">Hello, I'm</h1>
          <h1 className="hero-name"><em>Sishir Kundan Reddy</em></h1>
          <p className="hero-desc">
            A B.Tech student at Mahindra University, Hyderabad — passionate about
            building software, analyzing data, and turning ideas into working
            applications. Currently exploring network graphs, Python, and the web.
          </p>
          <div className="hero-actions">
            <a href="#/projects" className="btn-primary">
              View Projects →
            </a>
            <a href="mailto:sishirkundan96@gmail.com" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="avatar-frame">
            <div className="avatar-bg" />
            <div className="avatar-img">
              <img src={face} alt="Sishir" />
            </div>
            <div className="avatar-label">Mahindra Univ · CSE</div>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-num">6.0</div>
              <div className="stat-label">CGPA (5 sems)</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">2+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">4+</div>
              <div className="stat-label">Skills</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">'23</div>
              <div className="stat-label">Batch Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="section" id="about">
        <div className="section-label">About Me</div>
        <h2 className="section-title">A developer who likes to build things that work.</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a third-year Computer Science student at <strong>Mahindra University, Hyderabad</strong>,
              with a deep interest in software development, data analysis, and problem-solving.
              I enjoy building things — whether it's visualizing social networks or crafting interactive browser experiences.
            </p>
            <p>
              My coursework spans <strong>DBMS, Operating Systems, OOP, and Machine Learning</strong>.
              I've applied these foundations in projects involving graph analysis and JavaScript DOM manipulation.
            </p>
            <p>
              Outside of coding I enjoy <strong>chess</strong>, reading books, and art. I also participate
              in social initiatives — most recently contributing to <em>Wings for Dreams</em>, a
              student-led organization supporting child education in Hyderabad.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Research Interests</div>
              <div className="interest-tags">
                <span className="tag forest">Network Analysis</span>
                <span className="tag forest">Full Stack</span>
                <span className="tag forest">Machine Learning</span>
                <span className="tag forest">Data Structures</span>
                <span className="tag">Web Development</span>
                <span className="tag">Social Networks</span>
              </div>
            </div>
          </div>

          <div>
            <div className="contact-card">
              <div className="contact-card-header">Personal Details</div>
              <div className="contact-list">
                <div className="contact-item">
  <div className="contact-icon">in</div>
  <div>
    <div className="contact-info-label">LinkedIn</div>
    <div className="contact-info-value">
      <a
        href="https://www.linkedin.com/in/sishirkundan-reddy-3320b22b7/"
        target="_blank"
        rel="noreferrer"
      >
        My linkedin
      </a>
    </div>
  </div>
</div>

<div className="contact-item">
  <div className="contact-icon">&lt;/&gt;</div>
  <div>
    <div className="contact-info-label">GitHub</div>
    <div className="contact-info-value">
      <a
        href="https://github.com/SishirKundanReddy"
        target="_blank"
        rel="noreferrer"
      >
        My Github
      </a>
    </div>
  </div>
</div>
                <div className="contact-item">
                  <div className="contact-icon">#</div>
                  <div>
                    <div className="contact-info-label">Phone</div>
                    <div className="contact-info-value">+91 93900 07579</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">@</div>
                  <div>
                    <div className="contact-info-label">Personal Email</div>
                    <div className="contact-info-value">sishirkundan96@gmail.com</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">@</div>
                  <div>
                    <div className="contact-info-label">College Email</div>
                    <div className="contact-info-value">se23ucse136@mahindrauniversity.edu.in</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">⌖</div>
                  <div>
                    
                   
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Skills</div>
              <div className="skills-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                {['Python', 'Java', 'HTML', 'SQL','React','CSS'].map(skill => (
                  <div className="skill-item" key={skill}>
                    <div className="skill-dot" />
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section className="section" id="education">
        <div className="section-label">Education</div>
        <h2 className="section-title">Academic background</h2>

        <div className="edu-timeline">
          <div className="edu-item">
            <div className="edu-year">Aug 2023 – Present</div>
            <div className="edu-degree">B.Tech — Computer Science Engineering</div>
            <div className="edu-school">Mahindra University, Hyderabad</div>
            <div className="edu-detail">CGPA: 6.0 / 10 (till 5th semester)</div>
          </div>
          <div className="edu-item">
            <div className="edu-year">Jun 2021 – May 2023</div>
            <div className="edu-degree">Intermediate (11th & 12th)</div>
            <div className="edu-school">FIITJEE, Miyapur, Hyderabad</div>
            <div className="edu-detail">Percentage: 82%</div>
          </div>
          <div className="edu-item">
            <div className="edu-year">May 2020 – Jun 2021</div>
            <div className="edu-degree">10th Grade (CBSE)</div>
            <div className="edu-school">VVC, Khammam</div>
            <div className="edu-detail">Percentage: 87%</div>
          </div>
        </div>
      </section>

      {/* ─── TRAINING ─── */}
      <section className="section" id="training">
        <div className="section-label">Training Programs</div>
        <h2 className="section-title">Courses & certifications</h2>
        <div className="training-grid">
          <div className="training-card">
            <div className="training-source">Udemy</div>
            <div className="training-title">The Complete Python Pro Bootcamp</div>
            <div className="training-date">Dec 2024 – Feb 2025</div>
          </div>
        </div>
      </section>
    </>
  );
}