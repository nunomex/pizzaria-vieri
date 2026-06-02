import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pizzaria Vieri — Pizza Artesanal Italiana · Esmoriz',
  description: 'Massa de fermentação lenta 48h, ingredientes DOP importados de Itália, forno a lenha. Esmoriz, Portugal.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23C8202F' rx='18'/><text x='50' y='76' text-anchor='middle' font-size='66' fill='white' font-family='Georgia,serif' font-style='italic'>V</text></svg>",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
