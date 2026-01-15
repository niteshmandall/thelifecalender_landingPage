


import { useState } from 'react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState<'year' | 'life' | 'goal'>('year');

  const screenshots = {
    year: '/screenshots/year_calendar.png',
    life: '/screenshots/life_calendar.png',
    goal: '/screenshots/goal_calendar.png'
  };

  return (
    <section className="hero-section">
      <div className="hero-glow" />

      <div className="container hero-container-split">
        
        {/* Left Column: Text */}
        <div className="hero-content animate-fade-in">
          <span className="hero-badge">Available for Android</span>
          
          <h1 className="hero-title">
            Visualize your life <br />
            <span className="text-gradient">one dot at a time.</span>
          </h1>
          
          <p className="hero-text">
            A minimalist live wallpaper that helps you stay mindful of your time. 
            Track your life, year, or goals directly on your home screen.
          </p>
          
          <div className="hero-actions">
            <a href="https://github.com/hoxlabs/thelifecalender_landingPage/raw/main/public/app-release.apk" target="_blank" className="btn-primary">
              Download APK
            </a>
            <a href="#features" className="btn-secondary">
              Explore Modes
            </a>
          </div>

          <div className="hero-tabs-container">
            <p className="hero-tabs-label">Preview Mode:</p>
            <div className="hero-tabs">
              <button 
                className={`hero-tab ${activeTab === 'year' ? 'active' : ''}`}
                onClick={() => setActiveTab('year')}
              >
                Year
              </button>
              <button 
                className={`hero-tab ${activeTab === 'life' ? 'active' : ''}`}
                onClick={() => setActiveTab('life')}
              >
                Life
              </button>
              <button 
                className={`hero-tab ${activeTab === 'goal' ? 'active' : ''}`}
                onClick={() => setActiveTab('goal')}
              >
                Goal
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Phone Mockup */}
        <div className="hero-image-wrapper animate-fade-in delay-200">
          <div className="phone-mockup">
            <img 
              src={screenshots[activeTab]} 
              alt={`${activeTab} Calendar Preview`} 
              className="app-screenshot fade-transition"
              key={activeTab} // Force re-render for animation
            />
          </div>
          
          {/* Floating Elements */}
          <div className="floating-card card-1 glass-panel">
            <span>{activeTab === 'year' ? 'Year Progress' : activeTab === 'life' ? 'Life Progress' : 'Goal Target'}</span>
            <strong>{activeTab === 'year' ? '12%' : activeTab === 'life' ? '45%' : '80%'}</strong>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
