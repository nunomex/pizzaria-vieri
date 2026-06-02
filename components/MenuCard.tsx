'use client'

import { useState } from 'react'
import { MenuItem } from '@/data/menu'

interface MenuCardProps {
  item: MenuItem & { img?: string }
  onAdd: (item: MenuItem) => void
}

export default function MenuCard({ item, onAdd }: MenuCardProps) {
  const [added, setAdded] = useState(false)
  const [hovered, setHovered] = useState(false)

  const handle = () => {
    onAdd(item)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 12,
        border: '1px solid #EDE9DF',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.28s ease, box-shadow 0.28s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 16px 40px rgba(0,0,0,0.11)'
          : '0 1px 4px rgba(0,0,0,0.04)',
      }}
    >
      {/* Image */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4 / 3',
        background: '#F5EFE6',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        {item.img ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={item.img}
            alt={item.name}
            loading="lazy"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transition: 'transform 0.5s ease',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
            }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#D4C5B0" strokeWidth="1.2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
        )}

        {/* Tag badge over image */}
        {item.tag && (
          <span style={{
            position: 'absolute', top: 10, left: 10,
            background: 'rgba(200,32,47,0.92)',
            backdropFilter: 'blur(6px)',
            color: '#fff', borderRadius: 4,
            padding: '3px 8px',
            fontFamily: 'DM Sans', fontSize: 9, fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            {item.tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        padding: '16px 18px 18px',
      }}>
        <h3 style={{
          fontFamily: 'Cormorant Garamond', fontSize: 20, fontWeight: 500,
          lineHeight: 1.2, marginBottom: 6, color: '#1C1C18',
        }}>
          {item.name}
        </h3>

        <p style={{
          fontFamily: 'DM Sans', fontSize: 12, color: '#999', lineHeight: 1.6,
          margin: '0 0 auto',
          overflow: 'hidden', display: '-webkit-box',
          WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
        }}>
          {item.desc}
        </p>

        {/* Divider */}
        <div style={{
          height: 1, background: '#F0EBE0', margin: '14px 0',
        }} />

        {/* Price + Button */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{
            fontFamily: 'Cormorant Garamond', fontSize: 24, fontWeight: 600,
            color: '#1C1C18', lineHeight: 1,
          }}>
            €{item.price.toFixed(2)}
          </span>

          <button
            onClick={handle}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: added ? '#F0FAF4' : '#1C1C18',
              color: added ? '#2A9D5C' : '#fff',
              border: added ? '1px solid #2A9D5C' : '1px solid transparent',
              borderRadius: 7, padding: '8px 16px',
              fontFamily: 'DM Sans', fontSize: 12, fontWeight: 600,
              letterSpacing: '0.04em',
              transition: 'all 0.25s', whiteSpace: 'nowrap',
              cursor: 'pointer',
            }}
          >
            {added ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Adicionado
              </>
            ) : (
              <>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Adicionar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
