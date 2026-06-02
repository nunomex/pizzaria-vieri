'use client'

import { useState, useEffect } from 'react'
import { IcoCart, IcoX } from './icons'

interface NavProps {
  cartCount: number
  onCart: () => void
}

const links: [string, string][] = [
  ['Início', 'hero'],
  ['Menu', 'menu'],
  ['A Nossa História', 'about'],
  ['Localização', 'location'],
]

function goTo(id: string) {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
}

export default function Nav({ cartCount, onCart }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 70)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const active = scrolled || mobileOpen

  const handleLink = (id: string) => {
    goTo(id)
    setMobileOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
        height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 56px',
        background: active ? 'rgba(250,250,245,0.97)' : 'transparent',
        borderBottom: active ? '1px solid #EDE9DF' : 'none',
        backdropFilter: active ? 'blur(16px)' : 'none',
        transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
      }}>
        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          <div style={{
            fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: active ? '#C8202F' : 'rgba(255,255,255,0.75)',
            marginBottom: 2,
          }}>
            Pizzaria
          </div>
          <div style={{
            fontFamily: 'Cormorant Garamond', fontSize: 26, fontStyle: 'italic',
            fontWeight: 500, color: active ? '#1C1C18' : '#fff', lineHeight: 1,
          }}>
            Vieri
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="nav-links" style={{ display: 'flex', gap: 32 }}>
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => handleLink(id)}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              style={{
                background: 'none', border: 'none', padding: '4px 0',
                fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: scrolled ? '#1C1C18' : 'rgba(255,255,255,0.88)',
                fontWeight: 400, transition: 'opacity 0.2s',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Cart button */}
          <button
            onClick={onCart}
            style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px',
              background: active ? '#C8202F' : 'rgba(255,255,255,0.15)',
              border: active ? 'none' : '1px solid rgba(255,255,255,0.45)',
              color: '#fff', borderRadius: 6,
              fontFamily: 'DM Sans', fontSize: 13, fontWeight: 500,
              backdropFilter: active ? 'none' : 'blur(8px)',
              transition: 'background 0.3s',
            }}
          >
            <IcoCart />
            Carrinho
            {cartCount > 0 && (
              <span style={{
                background: '#fff', color: '#C8202F', borderRadius: '50%',
                width: 20, height: 20, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: 11, fontWeight: 700,
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(o => !o)}
            style={{
              background: 'none', border: 'none', padding: 8,
              display: 'flex', flexDirection: 'column',
              gap: 5, cursor: 'pointer',
              color: active ? '#1C1C18' : '#fff',
            }}
          >
            {mobileOpen ? <IcoX /> : (
              <>
                <span style={{ width: 22, height: 2, background: 'currentColor', borderRadius: 2, display: 'block' }} />
                <span style={{ width: 22, height: 2, background: 'currentColor', borderRadius: 2, display: 'block' }} />
                <span style={{ width: 16, height: 2, background: 'currentColor', borderRadius: 2, display: 'block' }} />
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="mobile-menu-anim"
          style={{
            position: 'fixed', top: 72, left: 0, right: 0, bottom: 0, zIndex: 998,
            background: 'rgba(250,250,245,0.98)', backdropFilter: 'blur(16px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: 8,
          }}
        >
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => handleLink(id)}
              onMouseEnter={e => (e.currentTarget.style.color = '#C8202F')}
              onMouseLeave={e => (e.currentTarget.style.color = '#1C1C18')}
              style={{
                background: 'none', border: 'none',
                fontFamily: 'Cormorant Garamond',
                fontSize: 42, fontWeight: 400, color: '#1C1C18',
                letterSpacing: '0.02em', padding: '10px 20px',
                cursor: 'pointer', transition: 'color 0.2s',
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => { onCart(); setMobileOpen(false) }}
            style={{
              marginTop: 24, display: 'flex', alignItems: 'center', gap: 10,
              background: '#C8202F', color: '#fff', border: 'none', borderRadius: 8,
              padding: '14px 32px', fontFamily: 'DM Sans', fontSize: 14,
              fontWeight: 600, letterSpacing: '0.06em', cursor: 'pointer',
            }}
          >
            <IcoCart /> Carrinho {cartCount > 0 && `(${cartCount})`}
          </button>
        </div>
      )}
    </>
  )
}
