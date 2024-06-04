import { Reddit_Mono } from 'next/font/google'

const reddit_mono = Reddit_Mono({
  subsets: ['latin'],
  style: ['normal'],
  variable: '--reddit-mono',
  display: 'auto',
  adjustFontFallback: false
})

export const fonts = {
    reddit_mono,
}