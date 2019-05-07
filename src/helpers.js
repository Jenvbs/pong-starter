export default {
  coordinates(x, y, width, height) {
    const leftX = x
    const rightX = x + width
    const topY = y
    const bottomY = y + height
    return [leftX, rightX, topY, bottomY]
  },

  wallBounce() {
    const hitLeft = this.x - this.radius <= 0
    const hitRight = this.x + this.radius >= this.boardWidth

    return [hitLeft, hitRight]
  }
}
