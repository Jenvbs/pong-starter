import { SVG_NS } from '../settings'
import helpers from '../helpers'

export default class Scoreboard {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

    render(svg) {
      const text = document.createElementNS(SVG_NS, 'text')
      text.setAttributeNS(null, 'x', this.x)
      text.setAttributeNS(null, 'y', this.y)
      text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype')
      text.setAttributeNS(null, 'font-size', this.size)
      text.setAttributeNS(null, 'fill', '#665')
      svg.appendChild(text)

      text.textContent = score

      svg.appendChild(text)
    }
  }
