'use client'

import { useState } from 'react'
import { CartItem } from '@/data/menu'
import { siteConfig } from '@/data/config'
import { IcoX, IcoWA } from './icons'

interface CartDrawerProps {
  items: CartItem[]
  onClose: () => void
  onUpdate: (id: string, qty: number) => void
}

export default function CartDrawer({ items, onClose, onUpdate }: CartDrawerProps) {
  const [step, setStep] = useState<'cart' | 'details'>('cart')
  const [name, setName] = useState('')
  const [addr, setAddr] = useState('')
  const [mode, setMode] = useState<'entrega' | 'levantamento'>('entrega')

  const total = items.reduce((s, i) => s + i.price * i.qty, 0)
  const count = items.reduce((s, i) => s + i.qty, 0)
  const canSend = name.trim() && (mode === 'levantamento' || addr.trim())

  const send = () => {
    let msg = `🍕 *Pedido — Pizzaria Vieri*\n\n`
    items.forEach(i => { msg += `• ${i.qty}× ${i.name} — €${(i.price * i.qty).toFixed(2)}\n` })
    msg += `\n*Total: €${total.toFixed(2)}*\n\n*Nome:* ${name}\n`
    if (mode === 'entrega') msg += `*Morada:* ${addr}\n*Tipo:* Entrega ao domicílio\n`
    else msg += `*Tipo:* Levantamento em loja\n`
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="overlay-anim"
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.48)', zIndex: 1100,
        }}
      />

      {/* Drawer */}
      <div
        className="cart-drawer cart-drawer-anim"
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: 420, maxWidth: '100vw', background: '#FAFAF5',
          zIndex: 1200, display: 'flex', flexDirection: 'column',
          boxShadow: '-6px 0 44px rgba(0,0,0,0.18)',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '24px 28px', borderBottom: '1px solid #EDE9DF',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div>
            <div style={{
              fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.28em',
              textTransform: 'uppercase', color: '#C8202F', marginBottom: 4,
            }}>
              O teu pedido
            </div>
            <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 26, fontWeight: 500 }}>
              Carrinho {count > 0 && <span style={{ fontSize: 18, color: '#bbb' }}>({count})</span>}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: '1px solid #E8E3D8', borderRadius: '50%',
              width: 38, height: 38, display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: '#666',
            }}
          >
            <IcoX />
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div style={{
            flex: 1, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            color: '#ccc', fontFamily: 'DM Sans', gap: 10,
          }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <div style={{ fontSize: 15 }}>O carrinho está vazio</div>
            <div style={{ fontSize: 13, color: '#ddd' }}>Adiciona itens do menu</div>
          </div>
        ) : (
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 28px' }}>
            {step === 'cart' ? (
              items.map(item => (
                <div key={item.id} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '14px 0', borderBottom: '1px solid #F0EAE0',
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: 'Cormorant Garamond', fontSize: 17,
                      fontWeight: 500, lineHeight: 1.2,
                    }}>
                      {item.name}
                    </div>
                    <div style={{ fontFamily: 'DM Sans', fontSize: 12, color: '#bbb', marginTop: 3 }}>
                      €{item.price.toFixed(2)} cada
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button
                      onClick={() => onUpdate(item.id, item.qty - 1)}
                      style={{
                        width: 28, height: 28, borderRadius: '50%',
                        border: '1px solid #E5E0D5', background: 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'DM Sans', fontSize: 18, lineHeight: 1, color: '#555',
                      }}
                    >
                      −
                    </button>
                    <span style={{
                      fontFamily: 'DM Sans', fontWeight: 600,
                      minWidth: 20, textAlign: 'center', fontSize: 14,
                    }}>
                      {item.qty}
                    </span>
                    <button
                      onClick={() => onUpdate(item.id, item.qty + 1)}
                      style={{
                        width: 28, height: 28, borderRadius: '50%',
                        border: 'none', background: '#C8202F', color: 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'DM Sans', fontSize: 18, lineHeight: 1,
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div style={{
                    fontFamily: 'DM Sans', fontWeight: 600,
                    fontSize: 14, minWidth: 52, textAlign: 'right',
                  }}>
                    €{(item.price * item.qty).toFixed(2)}
                  </div>
                </div>
              ))
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, paddingTop: 4 }}>
                <div>
                  <label style={{
                    fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: '#888', display: 'block', marginBottom: 8,
                  }}>
                    Nome *
                  </label>
                  <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="O teu nome completo"
                    style={{
                      width: '100%', padding: '12px 14px',
                      border: '1px solid #E5E0D5', borderRadius: 7,
                      fontFamily: 'DM Sans', fontSize: 14, outline: 'none', background: 'white',
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: '#888', display: 'block', marginBottom: 8,
                  }}>
                    Tipo de pedido
                  </label>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {(['entrega', 'levantamento'] as const).map(v => (
                      <button
                        key={v}
                        onClick={() => setMode(v)}
                        style={{
                          flex: 1, padding: '10px', borderRadius: 7,
                          border: `1px solid ${mode === v ? '#C8202F' : '#E5E0D5'}`,
                          background: mode === v ? '#FDEAEC' : 'white',
                          color: mode === v ? '#C8202F' : '#888',
                          fontFamily: 'DM Sans', fontSize: 13,
                          fontWeight: mode === v ? 600 : 400,
                        }}
                      >
                        {v === 'entrega' ? 'Entrega' : 'Levantamento'}
                      </button>
                    ))}
                  </div>
                </div>

                {mode === 'entrega' && (
                  <div>
                    <label style={{
                      fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.14em',
                      textTransform: 'uppercase', color: '#888', display: 'block', marginBottom: 8,
                    }}>
                      Morada de entrega *
                    </label>
                    <input
                      value={addr}
                      onChange={e => setAddr(e.target.value)}
                      placeholder="Rua, número, localidade"
                      style={{
                        width: '100%', padding: '12px 14px',
                        border: '1px solid #E5E0D5', borderRadius: 7,
                        fontFamily: 'DM Sans', fontSize: 14, outline: 'none', background: 'white',
                      }}
                    />
                  </div>
                )}

                <div style={{
                  background: '#F5F0E6', borderRadius: 7, padding: '12px 14px',
                  fontFamily: 'DM Sans', fontSize: 12, color: '#999', lineHeight: 1.65,
                }}>
                  Ao confirmar, serás redirecionado para o WhatsApp para finalizar o teu pedido.
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div style={{
            padding: '20px 28px', borderTop: '1px solid #EDE9DF',
            background: 'white', flexShrink: 0,
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'baseline', marginBottom: 16,
            }}>
              <span style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#999' }}>Total do pedido</span>
              <span style={{ fontFamily: 'Cormorant Garamond', fontSize: 28, fontWeight: 600 }}>
                €{total.toFixed(2)}
              </span>
            </div>

            {step === 'cart' ? (
              <button
                onClick={() => setStep('details')}
                style={{
                  width: '100%', padding: 15, background: '#C8202F', color: 'white',
                  border: 'none', borderRadius: 8, fontFamily: 'DM Sans',
                  fontSize: 14, fontWeight: 600, letterSpacing: '0.04em',
                }}
              >
                Avançar para a encomenda →
              </button>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <button
                  onClick={send}
                  disabled={!canSend}
                  style={{
                    width: '100%', padding: 15,
                    background: canSend ? '#25D366' : '#ccc',
                    color: 'white', border: 'none', borderRadius: 8,
                    fontFamily: 'DM Sans', fontSize: 14, fontWeight: 600,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    cursor: canSend ? 'pointer' : 'not-allowed',
                  }}
                >
                  <IcoWA size={17} /> Confirmar via WhatsApp
                </button>
                <button
                  onClick={() => setStep('cart')}
                  style={{
                    background: 'none', border: '1px solid #E5E0D5',
                    borderRadius: 8, padding: 11, fontFamily: 'DM Sans',
                    fontSize: 13, color: '#888',
                  }}
                >
                  ← Voltar ao carrinho
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}
