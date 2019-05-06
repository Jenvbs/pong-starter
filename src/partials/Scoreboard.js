import { SVG_NS } from '../settings'
import helpers from '../helpers'

export default class Scoreboard {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.score = 0;
  }

    render(svg, score) {
      const text = document.createElementNS(SVG_NS, 'text')
      text.setAttributeNS(null, 'x', this.x /3.5)
      text.setAttributeNS(null, 'y', this.y / 2)
      text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype')
      text.setAttributeNS(null, 'font-size', this.size)
      text.setAttributeNS(null, 'fill', '#665')
      svg.appendChild(text)

      text.innerHTML = this.score

      svg.appendChild(text)

      }
    }

