import React from 'react';
import classNames from 'classnames';

const hazardIcons = {
  Tsunami: '🌊',
  Cyclone: '🌀',
  Flood: '🌧',
  'High Tide': '🌊'
};

function PostCard({ post, highlight }) {
  return (
    <article className={classNames('post-card', post.verified && 'verified')}>
      <header className="post-header">
        <div className="avatar-sm" aria-hidden>{post.user[1]}</div>
        <div className="meta">
          <div className="user-line">
            <span className="user">{post.user}</span>
            {post.verified && <span className="badge verified-badge" title="Verified Source">Verified Source</span>}
          </div>
          <div className="sub meta-line">{post.platform} • {post.time} • {post.location}</div>
        </div>
        <div className="hazard-tag" title={post.hazard}>{hazardIcons[post.hazard]} {post.hazard}</div>
      </header>
  <p className="content">{highlight ? highlight(post.text) : post.text}</p>
      {post.image && (
        <div className="post-media" aria-label="Post media">
          <img src={post.image} alt={post.hazard + ' related'} loading="lazy" />
        </div>
      )}
      <footer className="engagement" aria-label="Engagement stats">
        <button className="stat" aria-label="likes">❤️ {post.likes}</button>
        <button className="stat" aria-label="comments">💬 {post.comments}</button>
        <button className="stat" aria-label="shares">🔁 {post.shares}</button>
      </footer>
      <div className="tags">
        {post.tags.map(t => <span key={t} className="tag">{highlight ? highlight(t) : t}</span>)}
      </div>
    </article>
  );
}
export default React.memo(PostCard);
