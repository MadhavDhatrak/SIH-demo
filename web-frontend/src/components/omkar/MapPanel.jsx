import React from 'react';

export default function MapPanel({ posts }) {
  const unique = Array.from(new Map(posts.map(p => [p.location, p])).values()).slice(0,8);
  return (
    <section className="panel">
      <h3 className="panel-title">Map (Placeholder)</h3>
      <div className="map-box">
        <div className="mini-map">
          {unique.map((p,i)=>(
            <div key={p.location} className="pin" style={{ left:`${10 + (i*9)%80}%`, top:`${15 + (i*13)%60}%`}} title={p.location} />
          ))}
        </div>
        <ul className="loc-list">
          {unique.map(p => <li key={p.location}>{p.location} <span className="loc-tag">{p.hazard}</span></li>)}
        </ul>
      </div>
    </section>
  );
}