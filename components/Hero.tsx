'use client'

import { goTo } from '@/lib/scroll'

interface HeroProps {
  onMenu: () => void
}

export default function Hero({ onMenu }: HeroProps) {
  return (
    <section
      id="hero"
      style={{ position: 'relative', height: '100vh', minHeight: 580, overflow: 'hidden' }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1920&q=85"
        alt="Pizza Vieri"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center center',
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(160deg, rgba(12,12,10,0.42) 0%, rgba(12,12,10,0.08) 50%, rgba(12,12,10,0.68) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2, height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 28px',
      }}>
        <div className="hero-anim-0" style={{
          fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.38em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: 22,
        }}>
          Pizza Artesanal Italiana · Esmoriz, Portugal
        </div>

        <h1 className="hero-anim-1" style={{
          fontFamily: 'Cormorant Garamond', color: '#fff',
          fontSize: 'clamp(54px, 9vw, 104px)', fontWeight: 400, lineHeight: 1.0,
          margin: '0 0 6px', textShadow: '0 2px 28px rgba(0,0,0,0.22)',
        }}>
          Artesanal.<br /><em>Italiana.</em><br />Irresistível.
        </h1>

        <p className="hero-sub hero-anim-2" style={{
          fontFamily: 'DM Sans', fontSize: 16, color: 'rgba(255,255,255,0.68)',
          margin: '22px 0 40px', maxWidth: 420, lineHeight: 1.7,
        }}>
          Massa de fermentação lenta 48h, ingredientes<br />
          DOP importados de Itália, forno a lenha.
        </p>

        <div className="hero-anim-3" style={{
          display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center',
        }}>
          <button
            onClick={onMenu}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            style={{
              padding: '14px 36px', background: '#fff', color: '#1C1C18',
              border: 'none', borderRadius: 5, fontFamily: 'DM Sans',
              fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', transition: 'opacity 0.2s',
            }}
          >
            Ver Menu
          </button>
          <button
            onClick={() => goTo('about')}
            style={{
              padding: '14px 36px', background: 'transparent', color: '#fff',
              border: '1px solid rgba(255,255,255,0.5)', borderRadius: 5,
              fontFamily: 'DM Sans', fontSize: 12, fontWeight: 400,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              backdropFilter: 'blur(6px)',
            }}
          >
            A Nossa História
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <rect x="1" y="1" width="12" height="16" rx="6" />
          <line x1="7" y1="5" x2="7" y2="9" />
        </svg>
        Scroll
      </div>
    </section>
  )
}
