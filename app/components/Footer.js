import Link from "next/link";
import { profile } from "../data/siteData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="footer-label">Build with intent</p>
          <h3>{profile.name}</h3>
          <p>{profile.availability}</p>
        </div>

        <div className="footer-links">
          <Link href={profile.social.github} target="_blank">
            GitHub
          </Link>
          <Link href={profile.social.linkedin} target="_blank">
            LinkedIn
          </Link>
          <Link href={profile.social.instagram} target="_blank">
            Instagram
          </Link>
        </div>
      </div>
      <p className="footer-copy">{year} {profile.name}. Designed and built with Next.js.</p>
    </footer>
  );
};

export default Footer;