import SectionIntro from "../components/SectionIntro";
import { profile, skills } from "../data/siteData";

export default function AboutPage() {
  return (
    <section className="section panel">
      <SectionIntro
        eyebrow="About"
        title="I design with empathy and engineer for scale"
        text="My workflow blends UX thinking, component architecture, and performance discipline so every interface is expressive, fast, and maintainable."
      />

      <div className="story-grid">
        <article className="story-card">
          <h3>Working Style</h3>
          <p>{profile.intro}</p>
          <p>
            I prioritize reusable primitives, clean spacing systems, and interaction details that make products feel polished in the first five seconds.
          </p>
        </article>

        <article className="story-card">
          <h3>What I Bring</h3>
          <p>
            Strong ownership from concept to deployment, thoughtful collaboration with designers, and a focus on making business goals visible through better UX.
          </p>
          <p>
            Currently {profile.availability.toLowerCase()} and open to impactful frontend opportunities.
          </p>
        </article>
      </div>

      <div className="section" style={{ marginTop: "1rem", padding: 0 }}>
        <SectionIntro
          eyebrow="Capability Map"
          title="Core skills"
          text="A practical view of where I deliver strongest product impact."
        />

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-row" key={skill.name}>
              <div className="skill-head">
                <strong>{skill.name}</strong>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">
                <span style={{ width: `${skill.level}%` }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
