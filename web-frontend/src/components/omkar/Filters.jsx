import React from 'react';

export default function Filters({ hazardTypes, hazard, onHazardChange, search, onSearchChange }) {
  return (
    <div className="filters">
      <label className="field">
        <span className="field-label">Hazard Type</span>
        <select value={hazard} onChange={e=>onHazardChange(e.target.value)}>
          {hazardTypes.map(h => <option key={h}>{h}</option>)}
        </select>
      </label>
      <label className="field">
        <span className="field-label">Search</span>
        <input value={search} onChange={e=>onSearchChange(e.target.value)} placeholder="Search posts..." />
      </label>
    </div>
  );
}
