export default {
  name: 'Vintersection',
  mounted(el, binding) {
    const count = {
      intersectionCounter: 0
    }
    const callback = (entries) => {
      count.intersectionCounter += 1
      if (entries[0].isIntersecting && count.intersectionCounter > 1) {
        binding.value()
      }
    }
    const options = el
    const observer = new IntersectionObserver(callback)
    observer.observe(options)
  }
}
