import { SVG_NS, KEYS, SETTINGS } from '../settings'

export default class Paddle {
  constructor(boardHeight, width, height, x, y, moveUpKey, moveDownKey) {
    this.boardHeight = boardHeight
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.paddleColor = SETTINGS.paddleColor
    this.speed = 10;
    this.score = 0
    this.moveUpKey = moveUpKey
    this.moveDownKey = moveDownKey

    document.addEventListener('keydown', (event) => { // moving the paddles
      if (event.key === this.moveUpKey) {
        this.up()
      } else if (event.key === this.moveDownKey) {
        this.down()
      }
    })
  }

  up() { // move paddle up
    if (this.y > 0) {
      this.y -= this.speed
    }
  }

  down() { // move paddle down
    if (this.y < this.boardHeight - this.height) {
      this.y += this.speed
    }
  }

  render(svg) {
    const rect = document.createElementNS(SVG_NS, 'rect')
    rect.setAttributeNS(null, 'fill', this.paddleColor)
    rect.setAttributeNS(null, 'width', this.width)
    rect.setAttributeNS(null, 'height', this.height)
    rect.setAttributeNS(null, 'x', this.x)
    rect.setAttributeNS(null, 'y', this.y)

    svg.appendChild(rect)
  }
}
