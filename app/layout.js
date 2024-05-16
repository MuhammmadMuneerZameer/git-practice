'use client'
import { Inter, Bebas_Neue, Almarai} from 'next/font/google';
import "./globals.css";
// import Spline from  "@splinetool/react-spline";

// import Spline from '@splinetool/react-spline';

export const inter = Inter({
  subsets: ['latin'],
  variable:'--font-inter',
  display: 'swap',
})
export const almarai=Almarai({
  subsets:['arabic'],
  variable:'--font-almarai',
  weight:'400',
})
 
export const Bebas = Bebas_Neue({
  subsets: ['latin'],
  variable:'--font-bebas',
  // display: 'swap',
  weight:['400']
})
 
export default function Layout({ children }) {
  return (
    <main lang="en" className={`${inter.variable} ${Bebas.variable} ${almarai.variable} `} >
      <body>
                <div>{children}</div>
      </body>
    </main>
  )
}