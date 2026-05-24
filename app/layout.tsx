import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nandini Patel | Full Stack & AI Engineer',
  description:
    'Portfolio of Nandini Patel - full stack and AI engineer specializing in web applications, data pipelines, and intelligent systems.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'Data Engineer', 'AI Engineer', 'React', 'Next.js'],
  authors: [{ name: 'Nandini Patel' }],
  openGraph: {
    title: 'Nandini Patel | Full Stack & AI Engineer',
    description:
      'Portfolio of Nandini Patel - full stack and AI engineer specializing in web applications, data pipelines, and intelligent systems.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nandini Patel | Full Stack & AI Engineer',
    description: 'Portfolio of Nandini Patel - full stack and AI engineer.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
