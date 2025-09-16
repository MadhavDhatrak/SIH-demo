import React from 'react';
import '../styles/layout.css';
import { useTheme } from '../context/ThemeContext.jsx';
import { useSearch } from '../context/SearchContext.jsx';

export default function Layout({ sidebar, insights, children, overlay }) {
  const { theme, toggleTheme } = useTheme();
  const { setShowSearch, resultCount } = useSearch();
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">@EmergencyAlerts</div>
        <div className="topbar-actions">
          <button className="icon-btn" aria-label="toggle theme" onClick={toggleTheme}><span>{theme === 'dark' ? '🌙' : '☀️'}</span></button>
          <button className="icon-btn" aria-label="search" onClick={()=> setShowSearch(true)}>
            <span>🔍</span>
            {typeof resultCount === 'number' && <span className="badge-count">{resultCount}</span>}
          </button>
          <button className="avatar" aria-label="profile"><span>👤</span><span className="dot" /></button>
        </div>
      </header>
      <div className="main-grid">
        <aside className="sidebar" aria-label="Sidebar">{sidebar}</aside>
        <main className="feed-area" aria-label="Feed">{children}</main>
        <aside className="insights" aria-label="Insights">{insights}</aside>
      </div>
      {overlay}
    </div>
  );
}

