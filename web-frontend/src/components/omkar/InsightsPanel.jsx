import React, { Suspense } from 'react';
import SentimentGauge from './SentimentGauge.jsx';
const HazardBar = React.lazy(() => import('./HazardBar.jsx'));
import MapPanel from './MapPanel.jsx';
import { useSearch } from '../context/SearchContext.jsx';
import { useData } from '../context/DataContext.jsx';

export default function InsightsPanel() {
  const { sentiment, distribution } = useSearch();
  const { posts } = useData();
  const [mode, setMode] = React.useState('simple');
  const gaugeRef = React.useRef(null);
  React.useEffect(()=>{
    const el = gaugeRef.current;
    if(!el) return;
    const handler = ()=> setMode(m=> m==='simple' ? 'segments' : 'simple');
    el.addEventListener('toggle-mode', handler);
    return ()=> el.removeEventListener('toggle-mode', handler);
  }, []);
  return (
    <div className="insights-inner">
      <section className="panel" ref={gaugeRef}>
        <h3 className="panel-title">Sentiment Indicator</h3>
        <SentimentGauge sentiment={sentiment} mode={mode} />
      </section>
      <section className="panel">
        <h3 className="panel-title">Posts by Hazard Type</h3>
        <Suspense fallback={<div className="empty">Loading chart...</div>}>
          <HazardBar data={distribution} />
        </Suspense>
      </section>
      <MapPanel posts={posts} />
    </div>
  );
}

