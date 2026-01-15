
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>The Life Calendar</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Built by <a href="https://hoxlabs.com/" target="_blank" style={{ color: 'var(--text-primary)', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.3)' }}>HoxLabs</a>
          </p>
        </div>
        
        <div className="footer-links">
           <a href="https://github.com/niteshmandall/thelifecalendar_android" target="_blank" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>GitHub</a>
           <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Privacy Policy</a>
           <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
