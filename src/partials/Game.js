import { SVG_NS, KEYS, SETTINGS } from '../settings'
import Board from './Board'
import Paddle from './Paddle'
import Ball from './Ball'
import Scoreboard from './Scoreboard.js'

export default class Game {
  constructor(elementID, width, height) {
    this.elementID = elementID
    this.width = width
    this.height = height
    this.gameElement = document.getElementById(elementID)

    this.paddleWidth = SETTINGS.paddleWidth
    this.paddleHeight = SETTINGS.paddleHeight
    this.boardGap = SETTINGS.boardGap
    this.ballRadius = SETTINGS.ballRadius
    this.paused = false

    this.board = new Board(this.width, this.height)
    this.scoreP1 = new Scoreboard(600, 60, 30);
    this.scoreP2 = new Scoreboard(1100, 60, 30);
    this.ball = new Ball(this.ballRadius, this.width, this.height)

    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      (this.height - this.paddleHeight) / 2,
      KEYS.a,
      KEYS.z
    )

    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.width - this.boardGap - this.paddleWidth,
      (this.height - this.paddleHeight) / 2,
      KEYS.up,
      KEYS.down
    )

    document.addEventListener('keydown', (e) => {
      if (e.key === KEYS.spaceBar) {
        this.paused = !this.paused
      }
    })
  }
  render() {
    if (this.paused) return

    // Delete all existing childeren of the gameElement on each render.
    this.gameElement.innerHTML = ''

    // Create SVG
    const svg = document.createElementNS(SVG_NS, 'svg')
    svg.setAttributeNS(null, 'width', this.width)
    svg.setAttributeNS(null, 'height', this.height)
    svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`)
    this.gameElement.appendChild(svg)

    // Render Stuff
    this.board.render(svg);
    this.scoreP1.render(svg, this.player1.score);
    this.scoreP2.render(svg, this.player2.score);
    this.player1.render(svg);
    this.player2.render(svg);
    this.ball.render(svg, this.player1, this.player2)

  }
}
