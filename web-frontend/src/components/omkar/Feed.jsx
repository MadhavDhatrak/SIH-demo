import React from 'react';
import PostCard from './PostCard.jsx';
import { useSearch } from '../context/SearchContext.jsx';

export default function Feed() {
  const { filteredPosts, highlight } = useSearch();
  return (
    <div className="feed-grid">
      <h2 className="feed-title">Post Feed</h2>
      <div className="posts-grid">
        {filteredPosts.map(p => <PostCard key={p.id} post={p} highlight={highlight} />)}
      </div>
    </div>
  );
}

