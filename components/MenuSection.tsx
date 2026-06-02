'use client'

import { useState } from 'react'
import MenuCard from './MenuCard'
import { MenuItem, menuData, imgPool } from '@/data/menu'

type MainTab = 'comida' | 'bebida'

const cats: Record<MainTab, [string, string][]> = {
  comida: [['pizzas','Pizzas'],['massas','Massas'],['entradas','Entradas'],['saladas','Saladas']],
  bebida: [['aguas','Águas'],['refrigerantes','Refrigerantes'],['cerveja','Cerveja'],['cafetaria','Cafetaria']],
}

interface MenuSectionProps {
  onAdd: (item: MenuItem) => void
}

export default function MenuSection({ onAdd }: MenuSectionProps) {
  const [main, setMain] = useState<MainTab>('comida')
  const [sub, setSub] = useState('pizzas')

  const switchMain = (m: MainTab) => {
    setMain(m)
    setSub(cats[m][0][0])
  }

  const menuMain = menuData[main] as Record<string, MenuItem[]>
  const items: MenuItem[] = menuMain[sub] ?? []

  return (
    <section
      id="menu"
      className="section-pad fade-in"
      style={{ padding: '96px 80px', background: '#FAFAF5' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: 'clamp(52px, 7vw, 86px)', fontWeight: 500,
            lineHeight: 1, letterSpacing: '-0.01em', color: '#1C1C18',
          }}>
            O Nosso <em style={{ color: '#C8202F' }}>Menu</em>
          </h2>
        </div>

        {/* Main tabs: Comida | Bebida */}
        <div className="fade-in delay-1" style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
          <div style={{ display: 'flex', borderRadius: 8, overflow: 'hidden', border: '1px solid #E0DBD0' }}>
            {(['comida', 'bebida'] as const).map((id, _, arr) => {
              const label = id === 'comida' ? 'Comida' : 'Bebida'
              return (
                <button
                  key={id}
                  onClick={() => switchMain(id)}
                  style={{
                    padding: '12px 52px', border: 'none',
                    background: main === id ? '#1C1C18' : '#fff',
                    color: main === id ? '#fff' : '#888',
                    fontFamily: 'DM Sans', fontSize: 13,
                    fontWeight: main === id ? 600 : 400,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    transition: 'all 0.22s',
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Sub tabs */}
        <div className="fade-in delay-1" style={{ display: 'flex', justifyContent: 'center', marginBottom: 44 }}>
          <div style={{
            background: '#F0EBE0', borderRadius: 9, padding: 4,
            display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center',
          }}>
            {cats[main].map(([id, label]) => (
              <button
                key={id}
                onClick={() => setSub(id)}
                style={{
                  padding: '9px 26px', border: 'none', borderRadius: 7,
                  background: sub === id ? '#C8202F' : 'transparent',
                  color: sub === id ? '#fff' : '#777',
                  fontFamily: 'DM Sans', fontSize: 13,
                  fontWeight: sub === id ? 600 : 400,
                  transition: 'all 0.22s',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          className="menu-grid fade-in delay-2"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}
        >
          {items.map((item, i) => {
            const pool = imgPool[sub] ?? []
            const photoId = pool[i % pool.length]
            const img = photoId
              ? `https://images.unsplash.com/photo-${photoId}?w=160&h=160&fit=crop&q=72`
              : undefined
            return <MenuCard key={item.id} item={{ ...item, img }} onAdd={onAdd} />
          })}
        </div>
      </div>
    </section>
  )
}
