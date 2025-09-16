import React, { useMemo, useEffect, useState } from 'react';

/* Props:
   sentiment: { positive, neutral, negative, score }
   mode: 'simple' | 'segments' (default 'simple')
   size: number (default 160)
*/
export default function SentimentGauge({ sentiment, mode='simple', size=160 }) {
  const [anim, setAnim] = useState(0); // 0..1 animation progress
  const scorePct = ((sentiment.score + 1) / 2); // 0..1
  useEffect(()=> {
    let start; const duration = 800; const from = 0; const to = scorePct;
    function easeOutCubic(x){ return 1 - Math.pow(1 - x, 3); }
    function frame(ts){
      if(!start) start = ts;
      const p = Math.min(1, (ts - start)/duration);
      setAnim(from + (to - from) * easeOutCubic(p));
      if(p < 1) requestAnimationFrame(frame);
    }
    setAnim(0);
    const id = requestAnimationFrame(frame);
    return ()=> cancelAnimationFrame(id);
  }, [scorePct]);

  const rTrack = size * 0.4375; // outer track radius
  const rArc = size * 0.3375;   // active ring radius
  const strokeWTrack = Math.round(size * 0.0875);
  const fullCirc = 2 * Math.PI * rArc;
  const spanRatio = 270/360; // 270° arc
  const arcLength = fullCirc * spanRatio;
  // start angle at -225° to center arc horizontally (so visible part sweeps top-left to top-right bottom)
  const rotation = -225; // degrees
  const offsetActive = arcLength * (1 - anim);
  const total = sentiment.positive + sentiment.neutral + sentiment.negative || 1;
  const level = scorePct > .66 ? 'High Concern' : scorePct > .33 ? 'Moderate' : 'Low Concern';

  const segments = useMemo(()=> mode === 'segments' ? [
    { key:'pos', pct: sentiment.positive / total, color: 'var(--ok)' },
    { key:'neu', pct: sentiment.neutral / total, color: 'var(--sub)' },
    { key:'neg', pct: sentiment.negative / total, color: 'var(--danger)' }
  ] : [], [mode, sentiment, total]);

  let acc = 0;
  const centerR = size * 0.25;

  // Dynamic color scale for simple mode: interpolate accent->warn->danger
  function colorFor(score) {
    if (score < .33) return 'var(--ok)';
    if (score < .66) return 'var(--warn)';
    return 'var(--danger)';
  }
  const activeColor = colorFor(scorePct);

  const tooltip = `${(sentiment.positive/total*100).toFixed(0)}% positive / ${(sentiment.neutral/total*100).toFixed(0)}% neutral / ${(sentiment.negative/total*100).toFixed(0)}% negative`;

  return (
    <div className="sentiment-gauge" role="img" aria-label={`Sentiment ${level}`}
      style={{ '--sg-size': size+'px' }} title={tooltip}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="sg-svg" style={{ rotate: rotation+'deg' }}>
        <defs>
          <filter id="sgGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx={size/2} cy={size/2} r={rTrack} fill="none" stroke="var(--border)" strokeWidth={strokeWTrack} strokeDasharray={arcLength} strokeDashoffset={0} />
        {mode === 'segments' && segments.map(seg => {
          const dash = arcLength * seg.pct;
          const gap = arcLength - dash;
          const node = (
            <circle key={seg.key}
              cx={size/2} cy={size/2} r={rArc} fill="none" stroke={seg.color} strokeWidth={strokeWTrack} strokeLinecap="round"
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={arcLength * (1 - acc) + 4}
              className="sg-seg" />
          );
          acc += seg.pct;
          return node;
        })}
        {mode === 'simple' && (
          <circle cx={size/2} cy={size/2} r={rArc} fill="none" stroke={activeColor} strokeWidth={strokeWTrack} strokeLinecap="round"
            strokeDasharray={arcLength}
            strokeDashoffset={offsetActive}
            filter={scorePct > .66 ? 'url(#sgGlow)' : undefined}
            className="sg-active" />
        )}
        <g style={{ rotate: (-rotation)+'deg', transformOrigin: 'center' }}>
          <circle cx={size/2} cy={size/2} r={centerR} fill="var(--panel)" stroke="var(--border)" strokeWidth="1" />
          <text x={size/2} y={size/2 - 6} textAnchor="middle" fontSize={Math.round(size*0.09)} fontWeight="600" fill="var(--text)">{level}</text>
          <text x={size/2} y={size/2 + 12} textAnchor="middle" fontSize={Math.round(size*0.07)} fill="var(--sub)">{Math.round(scorePct*100)}%</text>
        </g>
      </svg>
      <div className="sg-legend">
        <span className="pos" aria-label="positive">● {sentiment.positive}</span>
        <span className="neu" aria-label="neutral">● {sentiment.neutral}</span>
        <span className="neg" aria-label="negative">● {sentiment.negative}</span>
        <button className="sg-toggle" onClick={e=> e.currentTarget.closest('.sentiment-gauge')?.dispatchEvent(new CustomEvent('toggle-mode', { bubbles:true }))} aria-label="Toggle gauge mode">⇄</button>
      </div>
    </div>
  );
}
