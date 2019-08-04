import Canvas from './Canvas'
import Cursor from './Cursor'
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
    // const cursor = new Cursor(document.querySelector('.cursor'))
    new Cursor(document.querySelector('.cursor'))
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TopPage()
})
