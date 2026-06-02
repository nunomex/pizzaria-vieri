export function goTo(id: string, duration = 900) {
  const el = document.getElementById(id)
  if (!el) return

  const target = el.offsetTop - 72
  const start = window.scrollY
  const distance = target - start
  let startTime: number | null = null

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  }

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, start + distance * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
