

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>The Life Calendar</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Built with ❤️ by <a href="https://hoxlabs.com/" target="_blank" style={{ color: 'var(--text-primary)', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.3)' }}>HoxLabs</a>
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
           <a href="https://github.com/niteshmandall/thelifecalendar" target="_blank" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>GitHub</a>
           <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Privacy Policy</a>
           <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
