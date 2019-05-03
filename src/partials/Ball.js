import { SVG_NS } from '../settings'

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius
    this.boardWidth = boardWidth
    this.boardHeight = boardHeight
    this.direction = 1
  }

  render(svg) {
    // Draw ball
    let circle = document.createElementNS(SVG_NS, 'circle')
    circle.setAttributeNS(null, 'r', this.radius)
    circle.setAttributeNS(null, 'cx', this.boardWidth / 2) // x of the centre point
    circle.setAttributeNS(null, 'cy', this.boardHeight / 2) // y of the centre point
    circle.setAttributeNS(null, 'fill', 'white')
    svg.appendChild(circle)
  }
}
