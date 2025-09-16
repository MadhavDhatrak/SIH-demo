import React from 'react';
import { hazardTypes } from '../data/utils.js';
import Trending from './Trending.jsx';
import Filters from './Filters.jsx';
import { useData } from '../context/DataContext.jsx';
import { useSearch } from '../context/SearchContext.jsx';

export default function Sidebar() {
  const { trending, hazardFilter, setHazardFilter } = useData();
  const { search, setSearch } = useSearch();
  return (
    <div className="sidebar-inner">
      <section>
        <h3 className="section-title">Trending Hazards</h3>
        <Trending items={trending} />
      </section>
      <section className="filters-section">
        <h3 className="section-title">Filter</h3>
        <Filters
          hazardTypes={hazardTypes}
          hazard={hazardFilter}
          onHazardChange={setHazardFilter}
          search={search}
          onSearchChange={setSearch}
        />
      </section>
    </div>
  );
}

