

const technologies = [
  "Kotlin",
  "Jetpack Compose",
  "Material 3",
  "WallpaperService API",
  "Native Canvas"
];

const TechStack = () => {
  return (
    <section id="tech" style={{ padding: '8rem 0', background: 'linear-gradient(to top, rgba(255,255,255,0.02), transparent)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
         <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Built with Modern Android Tech</h2>
         
         <div style={{ 
           display: 'flex', 
           flexWrap: 'wrap', 
           justifyContent: 'center', 
           gap: '1rem' 
         }}>
           {technologies.map((tech, i) => (
             <span key={i} style={{
               padding: '0.8rem 1.5rem',
               borderRadius: '100px',
               border: '1px solid rgba(255,255,255,0.1)',
               color: 'var(--text-secondary)',
               fontSize: '1rem',
               background: 'rgba(0,0,0,0.3)'
             }}>
               {tech}
             </span>
           ))}
         </div>
      </div>
    </section>
  );
};

export default TechStack;
