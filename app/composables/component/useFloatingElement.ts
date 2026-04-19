export function useFloatingElement() {
  const bottomOffset = useState('cartOffset', () => '24px')
  const orderBoxOffset = useState('orderBoxOffset', () => '0px')
  const cartVisible = useState('cartVisible', () => true)

  const GAP = 24
  const NAVBAR_HEIGHT = 80
  const BUTTON_SIZE = 56

  // Detail page: orderBox naik dari footer, cart naik di atas orderBox
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

    orderBoxOffset.value = `${footerOverlap}px`
    bottomOffset.value = `${orderBoxHeight + footerOverlap + GAP}px`

    // Sembunyikan cart jika posisinya sudah terlalu tinggi (nabrak navbar)
    const currentBottom = orderBoxHeight + footerOverlap + GAP
    const maxBottom = window.innerHeight - NAVBAR_HEIGHT - BUTTON_SIZE
    cartVisible.value = currentBottom <= maxBottom
  }

  // Listing page: cart button hilang saat footer mulai menyentuh button
  function updateOffsetFooterOnly(footerEl: HTMLElement | null) {
    const hasOrderBox = !!document.querySelector('[data-order-box-mobile]')
    if (hasOrderBox) return

    let footerOverlap = 0
    if (footerEl) {
      const footerTop = footerEl.getBoundingClientRect().top
      footerOverlap = Math.max(0, window.innerHeight - footerTop)
    }

    bottomOffset.value = `${footerOverlap + GAP}px`

    // Sembunyikan saat footer mulai overlap dengan posisi button
    const buttonBottom = GAP + BUTTON_SIZE
    const footerTop = footerEl
      ? footerEl.getBoundingClientRect().top
      : window.innerHeight
    cartVisible.value = footerTop >= window.innerHeight - buttonBottom
  }

  return {
    bottomOffset,
    orderBoxOffset,
    cartVisible,
    updateOffset,
    updateOffsetFooterOnly
  }
}
