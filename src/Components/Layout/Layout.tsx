'use client'

import React, { useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollSmoother)

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const main = useRef<HTMLDivElement>(null)
  const smoother = useRef<ScrollSmoother | null>(null)

  // useGSAP(
  //   () => {
  //     if (!smoother.current) {
  //       smoother.current = ScrollSmoother.create({
  //         wrapper: '#smooth-wrapper',
  //         content: '#smooth-content',
  //         smooth: 2,
  //         effects: true,
  //       })
  //     }
  //   },
  //   { scope: main }
  // )

  return (
    <div id='smooth-wrapper' ref={main}>
      <div id='smooth-content'>
        <div className='page-wrapper'>{children}</div>
      </div>
    </div>
  )
}

export default Layout
