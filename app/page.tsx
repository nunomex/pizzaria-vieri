'use client'

import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import FeaturesBar from '@/components/FeaturesBar'
import MenuSection from '@/components/MenuSection'
import About from '@/components/About'
import Location from '@/components/Location'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import { IcoWA } from '@/components/icons'
import { CartItem, MenuItem } from '@/data/menu'
import { siteConfig } from '@/data/config'

function goTo(id: string) {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return []
    try { return JSON.parse(localStorage.getItem('vieri-cart') || '[]') } catch { return [] }
  })
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    try { localStorage.setItem('vieri-cart', JSON.stringify(cart)) } catch {}
  }, [cart])

  /* Intersection observer for fade-in animations */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach(el => obs.observe(el))
    }, 100)
    return () => { clearTimeout(timer); obs.disconnect() }
  }, [])

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === item.id)
      if (ex) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...item, qty: 1 }]
    })
    setCartOpen(true)
  }

  const updateCart = (id: string, qty: number) => {
    if (qty <= 0) setCart(prev => prev.filter(i => i.id !== id))
    else setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  }

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  return (
    <div>
      <Nav cartCount={cartCount} onCart={() => setCartOpen(true)} />
      <Hero onMenu={() => goTo('menu')} />
      <FeaturesBar />
      <MenuSection onAdd={addToCart} />
      <About />
      <Location />
      <Footer />

      {cartOpen && (
        <CartDrawer
          items={cart}
          onClose={() => setCartOpen(false)}
          onUpdate={updateCart}
        />
      )}

      {/* WhatsApp FAB */}
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLAnchorElement
          el.style.transform = 'scale(1.1)'
          el.style.boxShadow = '0 8px 32px rgba(37,211,102,0.55)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLAnchorElement
          el.style.transform = 'scale(1)'
          el.style.boxShadow = '0 4px 20px rgba(37,211,102,0.42)'
        }}
        style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 900,
          width: 54, height: 54, borderRadius: '50%', background: '#25D366',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.42)', color: 'white',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
      >
        <IcoWA size={26} />
      </a>
    </div>
  )
}
