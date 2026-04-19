export function useFloatingElement() {
  const bottomOffset = useState('cartOffset', () => '24px')
  const orderBoxOffset = useState('orderBoxOffset', () => '0px')

  const GAP = 24

  function updateOffset(
    orderBoxEl: HTMLElement | null,
    footerEl: HTMLElement | null
  ) {
    const orderBoxHeight
      = orderBoxEl && window.innerWidth < 1024
        ? orderBoxEl.getBoundingClientRect().height
        : 0

    let footerOverlap = 0
    if (footerEl) {
      const footerTop = footerEl.getBoundingClientRect().top
      footerOverlap = Math.max(0, window.innerHeight - footerTop)
    }

    bottomOffset.value = `${orderBoxHeight + footerOverlap + GAP}px`
    orderBoxOffset.value = `${footerOverlap}px`
  }

  function updateOffsetFooterOnly(footerEl: HTMLElement | null) {
    let footerOverlap = 0
    if (footerEl) {
      const footerTop = footerEl.getBoundingClientRect().top
      footerOverlap = Math.max(0, window.innerHeight - footerTop)
    }

    bottomOffset.value = `${footerOverlap + GAP}px`
  }

  return {
    bottomOffset,
    orderBoxOffset,
    updateOffset,
    updateOffsetFooterOnly
  }
}
