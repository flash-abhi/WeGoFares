import React from 'react';
import { ShieldCheck, Headphones, BadgeDollarSign, Plane, Users, Globe, Clock3, Star } from 'lucide-react';
import './About.css';

function About() {
  return (
    <div className="about-page about-aof">
      <section className="about-hero">
        <div className="container">
          <span className="about-chip">About WeGo Fares</span>
          <h1>Your Trusted Flight Booking Partner</h1>
          <p>
            We help travelers discover smart airfare deals with expert support and a seamless booking experience.
          </p>
        </div>
      </section>

      <section className="about-intro container">
        <div className="about-intro-card">
          <h2>Who We Are</h2>
          <p>
            WeGo Fares is an independent travel booking platform built to make flight planning simple, affordable,
            and reliable. Our specialists compare route options and fares from major carriers so you can book confidently.
          </p>
          <p>
            From first-time flyers to frequent travelers, we provide end-to-end assistance with itinerary selection,
            fare guidance, and post-booking support.
          </p>
        </div>
      </section>

      <section className="about-highlights container">
        <h2>Why Travelers Choose Us</h2>
        <div className="highlight-grid">
          <article className="highlight-card">
            <ShieldCheck size={22} />
            <h3>Secure Bookings</h3>
            <p>Protected checkout flow with careful verification and support.</p>
          </article>
          <article className="highlight-card">
            <Headphones size={22} />
            <h3>Expert Assistance</h3>
            <p>Experienced travel advisors available to help with route decisions.</p>
          </article>
          <article className="highlight-card">
            <BadgeDollarSign size={22} />
            <h3>Value Fares</h3>
            <p>Competitive prices across domestic and international destinations.</p>
          </article>
          <article className="highlight-card">
            <Clock3 size={22} />
            <h3>Timely Support</h3>
            <p>Responsive help before booking and after confirmation when needed.</p>
          </article>
        </div>
      </section>

      <section className="about-stats container">
        <div className="stats-box">
          <div className="stat-item">
            <Globe size={20} />
            <h3>500+</h3>
            <p>Global Routes</p>
          </div>
          <div className="stat-item">
            <Plane size={20} />
            <h3>120+</h3>
            <p>Airline Partners</p>
          </div>
          <div className="stat-item">
            <Users size={20} />
            <h3>2M+</h3>
            <p>Travelers Assisted</p>
          </div>
          <div className="stat-item">
            <Star size={20} />
            <h3>4.8/5</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </section>

      <section className="about-values container">
        <div className="values-card">
          <h2>Our Commitments</h2>
          <ul>
            <li><strong>Transparency:</strong> Clear pricing and straightforward booking information.</li>
            <li><strong>Reliability:</strong> Consistent support for itinerary updates and travel guidance.</li>
            <li><strong>Customer First:</strong> We focus on practical options that suit your travel needs.</li>
            <li><strong>Quality Service:</strong> Helpful, human support at every stage of your booking.</li>
          </ul>
        </div>
      </section>

      <section className="about-cta container">
        <div className="cta-card">
          <h2>Ready to Plan Your Next Trip?</h2>
          <p>Search flights and compare fares in minutes with WeGo Fares.</p>
          <a href="/" className="about-cta-btn">Search Flights</a>
        </div>
      </section>
    </div>
  );
}

export default About;
