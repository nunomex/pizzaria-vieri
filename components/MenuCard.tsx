'use client'

import { useState } from 'react'
import { MenuItem } from '@/data/menu'

interface MenuCardProps {
  item: MenuItem & { img?: string }
  onAdd: (item: MenuItem) => void
}

export default function MenuCard({ item, onAdd }: MenuCardProps) {
  const [added, setAdded] = useState(false)

  const handle = () => {
    onAdd(item)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.08)'
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
      style={{
        background: '#fff', borderRadius: 10, border: '1px solid #EDE9DF',
        padding: '13px 14px', display: 'flex', gap: 13, alignItems: 'flex-start',
        transition: 'box-shadow 0.22s, transform 0.2s',
      }}
    >
      {/* Thumbnail */}
      <div style={{
        width: 78, height: 78, borderRadius: 8, flexShrink: 0,
        overflow: 'hidden', background: '#F5EFE6',
      }}>
        {item.img && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={item.img}
            alt={item.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="lazy"
          />
        )}
      </div>

      {/* Content */}
      <div style={{
        flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column',
      }}>
        {item.tag && (
          <span style={{
            alignSelf: 'flex-start', background: '#FDEAEC', color: '#C8202F',
            borderRadius: 3, padding: '1px 7px', marginBottom: 4,
            fontFamily: 'DM Sans', fontSize: 9, fontWeight: 700,
            letterSpacing: '0.07em', textTransform: 'uppercase',
          }}>
            {item.tag}
          </span>
        )}

        <h3 style={{
          fontFamily: 'Cormorant Garamond', fontSize: 18, fontWeight: 500,
          lineHeight: 1.2, marginBottom: 3,
        }}>
          {item.name}
        </h3>

        <p style={{
          fontFamily: 'DM Sans', fontSize: 11.5, color: '#aaa', lineHeight: 1.5,
          margin: 0, overflow: 'hidden', display: '-webkit-box',
          WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
        }}>
          {item.desc}
        </p>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginTop: 'auto', paddingTop: 8,
        }}>
          <span style={{
            fontFamily: 'Cormorant Garamond', fontSize: 22, fontWeight: 600,
          }}>
            €{item.price.toFixed(2)}
          </span>
          <button
            onClick={handle}
            style={{
              background: added ? '#FDEAEC' : '#C8202F',
              color: added ? '#C8202F' : '#fff',
              border: 'none', borderRadius: 6, padding: '7px 15px',
              fontFamily: 'DM Sans', fontSize: 12, fontWeight: 600,
              transition: 'all 0.25s', whiteSpace: 'nowrap',
            }}
          >
            {added ? '✓ Ok' : '+ Adicionar'}
          </button>
        </div>
      </div>
    </div>
  )
}
