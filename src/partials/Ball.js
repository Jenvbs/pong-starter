import { SVG_NS } from '../settings'

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius
    this.boardWidth = boardWidth
    this.boardHeight = boardHeight
    this.direction = 1

    this.vx = 0
    this.vy = 0
    this.reset()
    this.startMoving()
  }

  reset() {
    this.x = this.boardWidth / 2
    this.y = this.boardHeight / 2
  }

  startMoving() {
    // Generate a random number between -5 and 5 this ISN't 0.
    this.vy = 0
    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5)
    }

    // Generate a random number between -5 and 5/
    // This is gonna enure that if vy is big, vx is small. Vice Versa
    this.vx = this.direction * (6 - Math.abs(this.vy))
  }

  wallBounce() {
    const hitTop = this.y - this.radius <= 0
    const hitBottom = this.y + this.radius >= this.boardHeight

    const hitLeft = this.x - this.radius <= 0
    const hitRight = this.x + this.radius >= this.boardWidth

    if (hitLeft || hitRight) {
      this.vx = -this.vx
    } else if (hitTop || hitBottom) {
      this.vy = -this.vy
    }
  }

  render(svg) {
    this.x += this.vx
    this.y += this.vy

    this.wallBounce()

    // Draw ball
    const circle = document.createElementNS(SVG_NS, 'circle')
    circle.setAttributeNS(null, 'r', this.radius)
    circle.setAttributeNS(null, 'cx', this.x) // x of the centre point
    circle.setAttributeNS(null, 'cy', this.y) // y of the centre point
    circle.setAttributeNS(null, 'fill', 'white')
    svg.appendChild(circle)
  }
}
