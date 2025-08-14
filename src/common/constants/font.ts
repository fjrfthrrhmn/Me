import { JetBrains_Mono, Roboto } from "next/font/google";

export const FONT_SANS = Roboto({
  display: 'swap',
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const FONT_MONO = JetBrains_Mono({
  display: 'swap',
  variable: '--font-mono',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})