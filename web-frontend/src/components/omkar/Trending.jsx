import React from 'react';

export default function Trending({ items }) {
  return (
    <ul className="trending-list">
      {items.map(i => (
        <li key={i.tag} className="trending-item">
          <span className="hashtag">{i.tag}</span>
          <span className="count">{i.count} posts</span>
        </li>
      ))}
    </ul>
  );
}
