


const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Glow */}
      <div className="hero-glow" />

      <div className="container hero-container">
        <div className="animate-fade-in">
          <span className="hero-badge">
            Available for Android
          </span>
          
          <h1 className="hero-title">
            Visualize your life <br />
            <span className="text-gradient">one dot at a time.</span>
          </h1>
          
          <p className="hero-text animate-fade-in delay-100">
            A minimalist live wallpaper that helps you stay mindful of your time. 
            Track your life, year, or goals directly on your home screen.
          </p>
          
          <div className="hero-actions animate-fade-in delay-200">
            <a href="https://github.com/hoxlabs/thelifecalender_landingPage/blob/main/public/app-release.apk" target="_blank" className="btn-primary">
              Download APK
            </a>
            <a href="#features" className="btn-secondary">
              Explore Modes
            </a>
          </div>
        </div>

        {/* Visual representation of dots */}
        <div className="hero-dots animate-fade-in delay-300">
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
