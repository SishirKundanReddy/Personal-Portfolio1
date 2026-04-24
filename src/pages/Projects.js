const projects = [
  {
    num: "01",
    type: "Data Analysis",
    badgeClass: "badge-rust",
    title: "Music Trend Analysis & Super-Spreaders",
    org: "Mahindra University · Aug – Sept 2025",
    desc: "Collected and analyzed social interaction data from Reddit and Bluesky using OSoMeNet exports. Built directed network graphs to model replies, re-posts, and mentions between users. Applied graph analysis techniques (PageRank, Degree Centrality, Betweenness) to identify influential users and generated ranked lists of super-spreaders based on multiple centrality metrics.",
    tech: ["Python", "NetworkX", "OSoMeNet", "PageRank", "Graph Theory"],
    github: "https://github.com/SishirKundanReddy/reddit-trend-analysis-with-superspreaders-",
  },
  {
    num: "02",
    type: "Frontend / DOM",
    badgeClass: "badge-forest",
    title: "Personal Portfolio & Cursor-Tracking Eyes",
    org: "Mahindra University · Oct – Nov 2025",
    desc: "Built an interactive JavaScript-based UI where animated eyes follow cursor movement in real-time. Added realistic blinking behaviour using timed intervals and DOM manipulation. Designed randomized blinking logic using recursive setTimeout for natural, lifelike timing.",
    tech: ["JavaScript", "HTML", "CSS", "DOM API", "setTimeout"],
    github: "https://github.com/SishirKundanReddy/webtech_portfolio",
  },
    {
  num: "03",
  type: "Frontend / React",
  badgeClass: "badge-rust", // or badge-forest if you want green theme
  title: "Personal Portfolio Website",
  org: "Self Project · 2026",
  desc: "Designed and developed a responsive personal portfolio using React and custom CSS to showcase projects, skills, and personal details. Implemented component-based architecture and deployed the site using GitHub Pages.",
  tech: ["React", "CSS", "React Router", "GitHub Pages"],
  github: "https://github.com/SishirKundanReddy/Personal-Portfolio1",
}

];

export default function Projects() {
  return (
    <>
      <div className="projects-hero">
        <div className="projects-hero-label">My Work</div>
        <h1 className="projects-hero-title">Things I've <em>built</em> &amp; explored</h1>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.num}>
            <div className="project-card-header">
              <div className="project-num">{p.num}</div>
              <div className={`project-type-badge ${p.badgeClass}`}>{p.type}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-org">{p.org}</div>
            </div>

            <div className="project-card-body">
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech-list">
                {p.tech.map((t) => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>

            <div className="project-card-footer">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub <span className="project-link-arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}