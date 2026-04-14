"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import SectionIntro from "./components/SectionIntro";
import { profile, projects, timeline } from "./data/siteData";

const riseIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <motion.div
          className="panel hero-content"
          initial="hidden"
          animate="visible"
          variants={riseIn}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="eyebrow">Portfolio 2026</p>
          <h1>
            Crafting digital products that feel <span>alive</span>.
          </h1>
          <p className="lead">{profile.tagline}</p>

          <div className="hero-actions">
            <Link href="/projects" className="button button-primary">
              Explore Projects
            </Link>
            <Link href="/contact" className="button button-secondary">
              Let&apos;s Collaborate
            </Link>
          </div>

          <div className="stat-grid">
            <div className="stat-item">
              <strong>{profile.years}</strong>
              <span>Years Building UI</span>
            </div>
            <div className="stat-item">
              <strong>10+</strong>
              <span>Deployed Interfaces</span>
            </div>
            <div className="stat-item">
              <strong>{profile.location}</strong>
              <span>Remote Collaboration</span>
            </div>
          </div>
        </motion.div>

        <motion.aside
          className="panel hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
        >
          <span className="orb orb-a" aria-hidden="true" />
          <span className="orb orb-b" aria-hidden="true" />
          <div className="avatar-wrap">
            <Image
              src="/MYself.jpg"
              alt={`${profile.name} portrait`}
              width={800}
              height={1000}
              className="avatar"
              priority
            />
          </div>
        </motion.aside>
      </section>

      <section className="section panel">
        <SectionIntro
          eyebrow="Narrative"
          title="From ideas to product-grade frontend"
          text="I focus on interfaces that are intentional: clear hierarchy, responsive behavior, strong performance, and motion that supports comprehension instead of distraction."
        />

        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={riseIn}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <p className="eyebrow">{item.period}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section panel">
        <SectionIntro
          eyebrow="Selected Work"
          title="Projects that show craft and clarity"
          text={profile.intro}
        />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
