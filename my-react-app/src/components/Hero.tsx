

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '4rem',
      overflow: 'hidden'
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: -1,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <div className="animate-fade-in">
          <span style={{ 
            display: 'inline-block', 
            padding: '0.5rem 1rem', 
            borderRadius: '50px', 
            background: 'rgba(255,255,255,0.05)', 
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '1.5rem',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)'
          }}>
            Available for Android
          </span>
          
          <h1 style={{ 
            fontSize: 'clamp(3rem, 6vw, 5rem)', 
            lineHeight: 1.1, 
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em'
          }}>
            Visualize your life <br />
            <span className="text-gradient">one dot at a time.</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-secondary)', 
            marginBottom: '2.5rem', 
            maxWidth: '600px', 
            marginLeft: 'auto', 
            marginRight: 'auto' 
          }} className="animate-fade-in delay-100">
            A minimalist live wallpaper that helps you stay mindful of your time. 
            Track your life, year, or goals directly on your home screen.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }} className="animate-fade-in delay-200">
            <a href="https://github.com/niteshmandall/thelifecalendar/releases" target="_blank" className="btn-primary">
              Download APK
            </a>
            <a href="#features" className="btn-secondary">
              Explore Modes
            </a>
          </div>
        </div>

        {/* Visual representation of dots */}
        <div style={{ 
          marginTop: '4rem', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(12px, 1fr))', 
          gap: '8px', 
          opacity: 0.3,
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          height: '200px',
          overflow: 'hidden'
        }} className="animate-fade-in delay-300">
           {Array.from({ length: 480 }).map((_, i) => (
             <div key={i} style={{
               width: '4px',
               height: '4px',
               borderRadius: '50%',
               background: i < 150 ? 'var(--text-primary)' : 'var(--text-secondary)',
               opacity: i < 150 ? 0.8 : 0.2
             }} />
           ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
