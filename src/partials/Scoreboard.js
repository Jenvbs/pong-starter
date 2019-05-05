import { SVG_NS } from '../settings'
import helpers from '../helpers'

export default class Scoreboard {
    constructor(width, height) {
      this.width = width / 2
      this.height = height / 2
    }

    render(svg) {
      const rect = document.createElementNS(SVG_NS, 'rect')
      rect.setAttributeNS(null, 'fill', '#353535')
      rect.setAttributeNS(null, 'width', this.width)
      rect.setAttributeNS(null, 'height', this.height)

      const line = document.createElementNS(SVG_NS, 'line')
      line.setAttributeNS(null, 'x1', this.width / 2)
      line.setAttributeNS(null, 'y1', 0)
      line.setAttributeNS(null, 'x2', this.width / 2)
      line.setAttributeNS(null, 'y2', this.height)
      line.setAttributeNS(null, 'stroke', 'white')
      line.setAttributeNS(null, 'stroke-dasharray', '20, 15')
      line.setAttributeNS(null, 'stroke-width', '4')

      svg.appendChild(rect)
      //svg.appendChild(line)
    }
  }
