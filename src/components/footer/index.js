import React from 'react';
import './footer.scss';

const Footer = () => (
  <section className="section footer">
    <div className="container">
      <div className="columns">
        <div className="column is-10 contactUs">
          <div className="info">
            <p> Contact us </p>
          
            <div className="options">
              <span><span className="mdi mdi-phone" /> <a href="tel:+353876271288">+353 876 271 288</a></span>
              <span><span className="mdi mdi-email" /> <a href="mailto:info@clifden10.com">info@clifden10.com</a></span>
            </div>
          </div>
        </div>

        <div className="column right">
          <a href="https://www.njuko.net/clifden-lifeboat-10k/select_competition" className="enter">Enter online</a>
        </div>

      </div>
    </div>
  </section>
);

export default Footer;