import { SVG_NS, KEYS, SETTINGS } from '../settings'
import helpers from '../helpers'
import pingSound from "../../public/sounds/pong-01.wav";
import pongSound from "../../public/sounds/pong-02.wav";

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth
    this.boardHeight = boardHeight
    this.ballColor = SETTINGS.ballColor;
    this.direction = 1
    this.speed = 10;
    this.vx = 0
    this.vy = 0
    this.score = 0
    this.ping = new Audio(pingSound);
    this.pong = new Audio(pongSound);

    this.reset()
    //this.startMoving()
    //this.goal()
  }


  reset() { //and start moving
    this.x = this.boardWidth / 2
    this.y = this.boardHeight / 2

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

    if (hitTop || hitBottom) {
      this.vy = -this.vy
      this.pong.play();
    }
    if (hitLeft || hitRight) { // ball returns to origin point when hitting wall on x-axis.
      this.speed = 0;
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2;
    }
  }

  paddleBounce(player1, player2) {
    if (this.vx > 0) {
      // We're moving to the right
      // We care about player 2
      const [leftX, _, topY, bottomY] = helpers.coordinates(
        player2.x,
        player2.y,
        player2.width,
        player2.height
      )

      if (
        this.x + this.radius >= leftX && // right edge of ball is >= left edge of paddle
        (this.y >= topY && this.y <= bottomY) // The ball y is >= paddle top and <= paddle bottom
      ) {
        this.vx = -this.vx;
        this.ping.play();
        window.alert("You're doing great!");
      }
    } else {
      // We're moving to the right
      // We care about player 1
      const [_, rightX, topY, bottomY] = helpers.coordinates(
        player1.x,
        player1.y,
        player1.width,
        player1.height
      )

      if (
        this.x - this.radius <= rightX && // left edge of ball is <= right edge of paddle
        (this.y >= topY && this.y <= bottomY) // The ball y is >= paddle top and <= paddle bottom
      ) {
        this.vx = -this.vx;
        this.ping.play();
        window.alert("Well done!");
      }

    }
  }


  render(svg, player1, player2) {
    this.x += this.vx
    this.y += this.vy

    this.wallBounce()
    this.paddleBounce(player1, player2)



    // Draw ball
    const circle = document.createElementNS(SVG_NS, 'circle')
    circle.setAttributeNS(null, 'r', this.radius)
    circle.setAttributeNS(null, 'cx', this.x) // x of the centre point
    circle.setAttributeNS(null, 'cy', this.y) // y of the centre point
    circle.setAttributeNS(null, 'fill', this.ballColor)
    svg.appendChild(circle)

  }
}
