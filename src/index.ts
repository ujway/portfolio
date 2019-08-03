import Canvas from './Canvas';
import './scss/style'

export default class TopPage {
  constructor() {
    const canvas = new Canvas()
    window.addEventListener('mousemove', e => {
      canvas.mouseMoved(e.clientX, e.clientY)
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TopPage()
})
