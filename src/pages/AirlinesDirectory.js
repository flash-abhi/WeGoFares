import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllAirlines } from '../data/airlines';
import { Plane, Search, Globe, Star, MapPin, Filter } from 'lucide-react';
import './AirlinesDirectory.css';

function AirlinesDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAlliance, setFilterAlliance] = useState('all');
  const airlines = getAllAirlines();

  const filteredAirlines = airlines.filter((airline) => {
    const matchesSearch = airline.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      airline.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAlliance = filterAlliance === 'all' || airline.alliance === filterAlliance;
    return matchesSearch && matchesAlliance;
  });

  const alliances = ['Star Alliance', 'Oneworld', 'SkyTeam', 'None (Independent)'];

  return (
    <div className="airlines-directory">
      <section className="directory-hero">
        <div className="directory-shell">
          <div className="hero-badge">
            <Plane size={18} />
            <span>Trusted Airline Partners</span>
          </div>
          <h1>Airlines Directory</h1>
          <p>Explore major airlines worldwide and choose the right carrier for your next journey.</p>
        </div>
      </section>

      <section className="directory-shell directory-main-card">
        <div className="directory-controls">
          <div className="control search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search airlines by name or code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="control filter-box">
            <Filter size={18} />
            <select value={filterAlliance} onChange={(e) => setFilterAlliance(e.target.value)}>
              <option value="all">All Alliances</option>
              {alliances.map((alliance) => (
                <option key={alliance} value={alliance}>{alliance}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="results-count">
          Showing <strong>{filteredAirlines.length}</strong> airline{filteredAirlines.length !== 1 ? 's' : ''}
        </div>

        <div className="airlines-grid">
          {filteredAirlines.map((airline) => (
            <Link to={`/airlines/${airline.slug}`} key={airline.slug} className="airline-card">
              <div className="airline-card-top">
                <div className="airline-logo-small">
                  {airline.logo ? (
                    <img
                      src={airline.logo}
                      alt={`${airline.name} logo`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <Plane size={28} style={{ display: airline.logo ? 'none' : 'flex' }} />
                </div>

                <div className="airline-title">
                  <h3>{airline.name}</h3>
                  <span className="airline-code-small">{airline.code}</span>
                </div>
              </div>

              <div className="airline-card-info">
                <div className="info-row">
                  <Globe size={16} />
                  <span>{airline.destinations} destinations</span>
                </div>
                <div className="info-row">
                  <MapPin size={16} />
                  <span>{airline.hubs[0]}</span>
                </div>
                <div className="info-row">
                  <Star size={16} />
                  <span>{airline.alliance}</span>
                </div>
              </div>

              <div className="airline-card-footer">
                <span className="view-details">View details</span>
              </div>
            </Link>
          ))}
        </div>

        {filteredAirlines.length === 0 && (
          <div className="no-results">
            <Plane size={56} />
            <h3>No airlines found</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </section>

      <section className="alliance-info directory-shell">
        <h2>Global Alliances</h2>
        <p>Airline alliances help travelers with better routes, benefits, and coordinated global support.</p>

        <div className="alliance-cards">
          <div className="alliance-card">
            <h3>Star Alliance</h3>
            <p>World's largest airline alliance with extensive international network coverage.</p>
            <div className="alliance-count">
              {airlines.filter((a) => a.alliance === 'Star Alliance').length} airlines
            </div>
          </div>
          <div className="alliance-card">
            <h3>Oneworld</h3>
            <p>Premium global alliance focused on seamless travel and quality service standards.</p>
            <div className="alliance-count">
              {airlines.filter((a) => a.alliance === 'Oneworld').length} airlines
            </div>
          </div>
          <div className="alliance-card">
            <h3>SkyTeam</h3>
            <p>Large global alliance connecting major hubs across continents and regions.</p>
            <div className="alliance-count">
              {airlines.filter((a) => a.alliance === 'SkyTeam').length} airlines
            </div>
          </div>
        </div>
      </section>

      <section className="directory-cta directory-shell">
        <h2>Ready to Book Your Next Flight?</h2>
        <p>Compare fares across airlines and find the best value for your route.</p>
        <Link to="/" className="cta-button">
          <Plane size={18} /> Search Flights
        </Link>
      </section>
    </div>
  );
}

export default AirlinesDirectory;
