import { SVG_NS } from '../settings'

export default class Game {
  constructor(elementID, width, height) {
    this.elementID = elementID
    this.width = width
    this.height = height

    this.gameElement = document.getElementById(elementID)
  }

  render() {
    // Create SVG
    const svg = document.createElementNS(SVG_NS, 'svg')
    svg.setAttributeNS(null, 'width', this.width)
    svg.setAttributeNS(null, 'height', this.height)
    svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`)
    this.gameElement.appendChild(svg)
  }
}
