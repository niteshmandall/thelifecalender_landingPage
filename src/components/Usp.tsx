

const Usp = () => {
  return (
    <section style={{ padding: '6rem 0', background: 'var(--surface-color)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Forget Complicated Setups.</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Why struggle with web shortcuts and automation tools? 
            Get the native experience designed for Android.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          alignItems: 'center'
        }}>
          
          {/* The Hard Way */}
          <div style={{ 
            opacity: 0.6, 
            padding: '2rem', 
            border: '1px dashed var(--text-secondary)',
            borderRadius: '16px'
          }}>
            <h3 style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ textDecoration: 'line-through' }}>The Web Way</span>
              <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', background: '#333', borderRadius: '4px' }}>OLD</span>
            </h3>
            
            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
              <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem' }}>
                <span>❌</span> Install MacroDroid
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem' }}>
                <span>❌</span> Configure HTTP Requests
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem' }}>
                <span>❌</span> Manually set triggers
              </li>
              <li style={{ display: 'flex', gap: '0.8rem' }}>
                <span>❌</span> "Block next actions..."
              </li>
            </ul>
          </div>

          {/* The App Way */}
          <div className="glass-panel" style={{ 
            padding: '3rem', 
            border: '1px solid var(--accent-color)', 
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.1)',
            transform: 'scale(1.05)',
            position: 'relative'
          }}>
             <div style={{ 
               position: 'absolute', 
               top: '-15px', 
               right: '20px', 
               background: 'var(--accent-color)', 
               color: 'white', 
               padding: '0.4rem 1rem', 
               borderRadius: '50px', 
               fontWeight: 'bold',
               fontSize: '0.85rem'
             }}>
               NATIVE APP
             </div>

            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>The Life Calendar</h3>
            
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '4px', borderRadius: '50%' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <strong>One-Tap Setup</strong>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '4px', borderRadius: '50%' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Zero configuration needed</span>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '4px', borderRadius: '50%' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Works offline</span>
              </li>
               <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '4px', borderRadius: '50%' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Battery efficient</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Usp;
