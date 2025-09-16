import React from 'react';
import Layout from '../components/Layout.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Feed from '../components/Feed.jsx';
import InsightsPanel from '../components/InsightsPanel.jsx';
import MobileFilters from '../components/MobileFilters.jsx';
import { useSearch } from '../context/SearchContext.jsx';
import { useData } from '../context/DataContext.jsx';

function SearchOverlay() {
  const { showSearch, setShowSearch, search, setSearch, addRecent, recent, setRecent, hashtagSuggestions, liveRegionRef } = useSearch();
  const { setHazardFilter } = useData();
  const inputRef = React.useRef(null);
  const triggerRef = React.useRef(document.activeElement);
  React.useEffect(()=> {
    if(showSearch && inputRef.current){ inputRef.current.focus(); }
  }, [showSearch]);
  const close = () => { setShowSearch(false); if(triggerRef.current && triggerRef.current.focus) triggerRef.current.focus(); };
  if(!showSearch) return null;
  return (
    <div className="global-search-overlay" role="dialog" aria-modal="true" aria-labelledby="search-dialog-title" onMouseDown={e=> { if (e.target.classList.contains('global-search-overlay')) close(); }}>
      <div className="visually-hidden" aria-live="polite" ref={liveRegionRef} />
      <div className="gs-box" onKeyDown={e=> {
        if (e.key === 'Escape') { close(); return; }
        if (e.key === 'Enter') { addRecent(search); close(); }
        if (e.key === 'Tab') {
          const focusable = e.currentTarget.querySelectorAll('input,button');
          if (!focusable.length) return;
          const first = focusable[0];
          const last = focusable[focusable.length-1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }}>
        <div className="gs-main">
          <h2 id="search-dialog-title" className="visually-hidden">Global Search</h2>
          <input ref={inputRef} value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search hazards, tags, users..." aria-label="Search posts input" />
          <button onClick={()=> { addRecent(search); close(); }} className="close-btn" aria-label="Apply search">↵</button>
          <button onClick={close} className="close-btn secondary" aria-label="Close search">✕</button>
        </div>
        {(hashtagSuggestions.length || recent.length) && (
          <div className="gs-suggestions">
            {hashtagSuggestions.length > 0 && (
              <div className="gs-group"><div className="gs-label">Top Tags</div>
                <div className="gs-chips">{hashtagSuggestions.map(t=> <button key={t} onClick={()=> setSearch(t)}>{t}</button>)}</div>
              </div>
            )}
            {recent.length > 0 && (
              <div className="gs-group"><div className="gs-label">Recent <button className="mini-clear" onClick={()=> setRecent([])} aria-label="Clear recent searches">Clear</button></div>
                <div className="gs-chips">{recent.map(t=> <button key={t} onClick={()=> setSearch(t)}>{t}</button>)}</div>
              </div>
            )}
          </div>
        )}
        <div className="gs-footer">
          <button className="clear-filters" onClick={()=> { setHazardFilter('All'); setSearch(''); }} aria-label="Clear filters">Reset Filters</button>
        </div>
      </div>
    </div>
  );
}

export default function Social(){
  return (
    <Layout
      sidebar={<Sidebar />}
      insights={<InsightsPanel />}
      overlay={<SearchOverlay />}
    >
      <MobileFilters />
      <Feed />
    </Layout>
  );
}
