import Lenis from 'lenis'

export const NAV_OFFSET = -72

let lenis = null

export const initLenis = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null

    lenis = new Lenis({ anchors: { offset: NAV_OFFSET }, autoRaf: true })
    return () => {
        lenis?.destroy()
        lenis = null
    }
}

export const getLenis = () => lenis

export const scrollToId = (id) => {
    const target = document.getElementById(id)
    if (!target) return
    if (lenis) {
        lenis.start()
        lenis.scrollTo(target, { offset: NAV_OFFSET })
    } else {
        target.scrollIntoView({ behavior: 'smooth' })
    }
}
