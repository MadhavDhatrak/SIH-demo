import React, { useState } from 'react';
import { hazardTypes } from '../data/utils.js';
import { useData } from '../context/DataContext.jsx';
import { useSearch } from '../context/SearchContext.jsx';

export default function MobileFilters() {
  const { hazardFilter, setHazardFilter } = useData();
  const { search, setSearch } = useSearch();
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-filters">
      <button className="mf-toggle" onClick={() => setOpen(o=>!o)} aria-expanded={open} aria-controls="mf-panel">
        Filters & Search ▾
      </button>
      {open && (
        <div id="mf-panel" className="mf-panel">
          <div className="mf-row">
            <label>
              <span className="mf-label">Hazard</span>
              <select value={hazardFilter} onChange={e=>setHazardFilter(e.target.value)}>
                {hazardTypes.map(h => <option key={h}>{h}</option>)}
              </select>
            </label>
            <label className="mf-search">
              <span className="mf-label">Search</span>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search posts" />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

