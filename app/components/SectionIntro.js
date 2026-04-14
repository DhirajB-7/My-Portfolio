export default function SectionIntro({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? "section-intro section-intro-center" : "section-intro"}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </div>
  );
}
