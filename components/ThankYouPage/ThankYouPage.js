import React from 'react';
import './ThankYouPage.css';
import logo from '../../assets/images/tann-mann-logo.png';

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <div className="logo-header">
          <div className="logo-the">THE</div>
          <div className="logo-main">
            <span className="logo-tann">TANN</span>
            <span className="logo-mann">MANN</span>
          </div>
          <div className="logo-gaadi">GAADI</div>
        </div>
        
        <h1>Thank You for Your Support!</h1>
        
        <div className="thank-you-message">
          <p>Your contribution to <strong>Tann Mann Gaadi</strong> helps us continue our mission to provide transportation solutions to those in need.</p>
          <p>Together, we're moving communities forward.</p>
        </div>
        
        <div className="donation-details">
          <div className="detail-box">
            <span className="detail-label">Donation Reference:</span>
            <span className="detail-value">TMG-{Math.floor(1000 + Math.random() * 9000)}</span>
          </div>
          <div className="detail-box">
            <span className="detail-label">Receipt Sent To:</span>
            <span className="detail-value">your@email.com</span>
          </div>
        </div>
        
        <div className="impact-section">
          <h3>Your Impact:</h3>
          <div className="impact-items">
            <div className="impact-item">
              <div className="impact-number">10+</div>
              <div className="impact-text">Families Transported</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">5+</div>
              <div className="impact-text">Communities Reached</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">100+</div>
              <div className="impact-text">Miles Covered</div>
            </div>
          </div>
        </div>
        
        <button className="action-button">Return to Tann Mann Gaadi</button>
        
        <div className="social-share">
          <p>Share your support:</p>
          <div className="social-icons">
            <button className="social-icon facebook">Facebook</button>
            <button className="social-icon whatsapp">WhatsApp</button>
          </div>
        </div>
      </div>
      
      <footer className="thank-you-footer">
        <p>Tann Mann Gaadi &copy; {new Date().getFullYear()}</p>
        <p>Driving Change, Delivering Hope</p>
      </footer>
    </div>
  );
};

export default ThankYouPage;