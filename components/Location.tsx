'use client'

import { IcoPin, IcoPhone, IcoMail, IcoIG } from './icons'
import { siteConfig } from '@/data/config'

export default function Location() {
  const today = new Date().getDay()

  const contacts = [
    { icon: <IcoPin />,   text: `${siteConfig.address}, ${siteConfig.city}`, href: siteConfig.mapsUrl,                        target: '_blank' },
    { icon: <IcoPhone />, text: siteConfig.phone,                             href: `tel:${siteConfig.phone.replace(/\s/g, '')}`, target: '_self'  },
    { icon: <IcoMail />,  text: siteConfig.email,                             href: `mailto:${siteConfig.email}`,                target: '_self'  },
    { icon: <IcoIG />,    text: `@${siteConfig.instagram}`,                   href: `https://instagram.com/${siteConfig.instagram}`, target: '_blank' },
  ]

  return (
    <section
      id="location"
      className="section-pad"
      style={{ background: '#1C1C18', padding: '96px 80px', color: '#FAFAF5' }}
    >
      <div
        className="loc-grid"
        style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72,
        }}
      >
        {/* Info column */}
        <div className="fade-in">
          <div style={{
            fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.38em',
            textTransform: 'uppercase', color: '#C8202F', marginBottom: 20,
          }}>
            Encontra-nos
          </div>

          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: 'clamp(34px, 4vw, 52px)', fontWeight: 400,
            lineHeight: 1.15, marginBottom: 40,
          }}>
            Horários<br /><em>&amp; Localização</em>
          </h2>

          {/* Hours */}
          <div style={{ marginBottom: 40 }}>
            {siteConfig.hours.map((h, i) => {
              const isTd = i === today
              return (
                <div
                  key={h.day}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '11px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)',
                    background: isTd ? 'rgba(200,32,47,0.14)' : 'transparent',
                    borderRadius: isTd ? 5 : 0,
                  }}
                >
                  <span style={{
                    fontFamily: 'DM Sans', fontSize: 13,
                    color: isTd ? '#F5A0A8' : 'rgba(255,255,255,0.5)',
                    fontWeight: isTd ? 600 : 400,
                  }}>
                    {h.day}{isTd ? ' · hoje' : ''}
                  </span>
                  <span style={{
                    fontFamily: 'DM Sans', fontSize: 13,
                    color: h.open ? 'rgba(255,255,255,0.82)' : '#E05555',
                    textAlign: 'right',
                  }}>
                    {h.open ? h.slots.join('  ·  ') : 'Fechado'}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Contacts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {contacts.map(({ icon, text, href, target }) => (
              <a
                key={text}
                href={href}
                target={target}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.92)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.58)')}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  color: 'rgba(255,255,255,0.58)', fontFamily: 'DM Sans',
                  fontSize: 14, transition: 'color 0.2s',
                }}
              >
                {icon} {text}
              </a>
            ))}
          </div>
        </div>

        {/* Map column */}
        <div className="fade-in delay-2" style={{ display: 'flex', alignItems: 'flex-start', paddingTop: 8 }}>
          <div style={{
            width: '100%', borderRadius: 10, overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <iframe
              src="https://maps.google.com/maps?q=Rua+Fernao+Veloso+217,+Esmoriz,+Portugal&output=embed&z=15&hl=pt"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              title="Localização Pizzaria Vieri"
            />
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              onMouseEnter={e => (e.currentTarget.style.background = '#A0181F')}
              onMouseLeave={e => (e.currentTarget.style.background = '#C8202F')}
              style={{
                display: 'block', background: '#C8202F', color: '#fff',
                textAlign: 'center', padding: '14px',
                fontFamily: 'DM Sans', fontSize: 13, fontWeight: 600,
                letterSpacing: '0.06em', transition: 'background 0.2s',
              }}
            >
              Abrir no Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
