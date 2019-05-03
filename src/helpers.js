export default {
  coordinates(x, y, width, height) {
    const leftX = x
    const rightX = x + width
    const topY = y
    const bottomY = y + height
    return [leftX, rightX, topY, bottomY]
  },
}
