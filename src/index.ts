import Canvas from './Canvas';
import './scss/style'

export default class TopPage {
  constructor() {
    const canvas = new Canvas('scroll-container_title')
    window.addEventListener('mousemove', e => {
      canvas.mouseMoved(e.clientX, e.clientY)
    })
    window.addEventListener('scroll', () => {
      canvas.scrolled(window.scrollY)
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TopPage()
})
