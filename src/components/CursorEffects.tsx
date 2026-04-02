import { useEffect, useRef } from 'react'

export default function CursorEffects() {
  const cursorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const trails: HTMLDivElement[] = []
    for (let i = 0; i < 8; i++) {
      const trail = document.createElement('div')
      trail.className = 'cursor-trail'
      document.body.appendChild(trail)
      trails.push(trail)
    }

    const positions = Array(trails.length).fill(0).map(() => ({ x: 0, y: 0 }))
    let mouseX = 0
    let mouseY = 0

    const createSparkleParticle = (x: number, y: number) => {
      const particle = document.createElement('div')
      particle.className = 'cursor-particle particle-sparkle'
      particle.style.left = `${x + (Math.random() - 0.5) * 30}px`
      particle.style.top = `${y + (Math.random() - 0.5) * 30}px`
      document.body.appendChild(particle)

      setTimeout(() => {
        if (document.body.contains(particle)) document.body.removeChild(particle)
      }, 2000)
    }

    const createBrushParticle = (x: number, y: number) => {
      const particle = document.createElement('div')
      particle.className = 'cursor-particle particle-brush'
      particle.style.left = `${x + (Math.random() - 0.5) * 40}px`
      particle.style.top = `${y + (Math.random() - 0.5) * 40}px`
      particle.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`
      document.body.appendChild(particle)

      setTimeout(() => {
        if (document.body.contains(particle)) document.body.removeChild(particle)
      }, 1500)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      mouseX = clientX
      mouseY = clientY

      cursor.style.left = `${clientX}px`
      cursor.style.top = `${clientY}px`

      positions.unshift({ x: clientX, y: clientY })
      positions.pop()

      trails.forEach((trail, index) => {
        const pos = positions[index * 2]
        if (pos) {
          trail.style.left = `${pos.x}px`
          trail.style.top = `${pos.y}px`
          trail.style.opacity = `${Math.max(0.1, 0.8 - (index * 0.1))}`
          trail.style.transform = `translate(-50%, -50%) scale(${1 - (index * 0.1)})`
        }
      })

      if (Math.random() < 0.15) createSparkleParticle(clientX, clientY)
      if (Math.random() < 0.08) createBrushParticle(clientX, clientY)
    }

    const handleMouseEnter = () => cursor.classList.add('cursor-hover')
    const handleMouseLeave = () => cursor.classList.remove('cursor-hover')

    const handleClick = () => {
      cursor.classList.add('cursor-click')
      for (let i = 0; i < 6; i++) {
        setTimeout(() => createSparkleParticle(mouseX, mouseY), i * 50)
      }
      setTimeout(() => cursor.classList.remove('cursor-click'), 400)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('click', handleClick)

    const interactiveElements = document.querySelectorAll('p, .kathakali-image, .circle-text, .social-link')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('click', handleClick)
      trails.forEach(trail => { if (document.body.contains(trail)) document.body.removeChild(trail) })
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return <div ref={cursorRef} className="cursor"></div>
}
