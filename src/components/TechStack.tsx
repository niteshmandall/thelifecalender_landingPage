
const technologies = [
  "Kotlin",
  "Jetpack Compose",
  "Material 3",
  "WallpaperService API",
  "Native Canvas"
];

const TechStack = () => {
  return (
    <section id="tech" className="tech-section">
      <div className="container" style={{ textAlign: 'center' }}>
         <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Built with Modern Android Tech</h2>
         
         <div className="tech-tags">
           {technologies.map((tech, i) => (
             <span key={i} className="tech-tag">
               {tech}
             </span>
           ))}
         </div>
      </div>
    </section>
  );
};

export default TechStack;
