import React from 'react'
import {PropTypes} from 'prop-types'
import Petal from './images/petal4.png'
const {number} = PropTypes

class CherryBlossom extends React.Component {

  mounted = false
  inited = false
  context = null
  petals = []
  canvasWidth = 0
  canvasHeight = 0
  img = null

  static propTypes = {
    amount: number,
    size: number,
    velocity: number,
    windforce: number,
    rolling: number,
    zindex: number,
  }

  static defaultProps = {
    amount: 35,
    size: 12,
    velocity: 1.5,
    windforce: 5,
    rolling: 2,
    zindex: null,
  }

  init = (props=this.props) => {
    this.petals = []
    for (let i = 0; i < props.amount; i++) {
      this.petals.push({
        x: random(0, this.canvasWidth),
        y: random(0, this.canvasHeight),
        r: random(props.size, props.size * 2) / 2,
        velX: 0,
        velY: random(props.velocity, props.velocity * 2),
        rolling: random(0, 2*Math.PI),
        opacity: 1,
      })
    }
    if (!this.inited){
      this.inited = true
      this.generateObject()
    }
  }

  generateObject = () => {
    if (!this.mounted) return
    if (!this.context || !this.context.clearRect) this.context = this.refs.canvas.getContext('2d')
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight)

    for (let i = 0; i < this.petals.length; i++) {
      let petal = this.petals[i]
      petal.velX = Math.abs(petal.velX) < Math.abs(this.props.windforce) ? petal.velX + this.props.windforce / 20 : this.props.windforce
      petal.y = petal.y + petal.velY * 0.5
      petal.x = petal.x + (this.props.rolling ? 0.4 * Math.cos(petal.rolling += 0.03) * petal.opacity * this.props.rolling : 0) + petal.velX * 0.5
      // context . drawImage(image, dx, dy, dw, dh)
      this.context.drawImage(this.img, petal.x - petal.r, petal.y - petal.r, 2 * petal.r, 2 * petal.r)

      if (petal.x > this.canvasWidth + petal.r || petal.x < -petal.r || petal.y > this.canvasHeight + petal.r || petal.y < -petal.r) {
        this.reset(petal)
      }
    }

    if (this.mounted) {
      requestAnimationFrame(this.generateObject)
    }
  }

  reset = (petal) => {
    let prevR = petal.r
    petal.r = random(this.props.size, this.props.size * 2) / 2
    if (petal.x > this.canvasWidth + prevR) {
      petal.x = -petal.r
      petal.y = random(0, this.canvasHeight)
    }
    else if (petal.x < -prevR) {
      petal.x = this.canvasWidth + petal.r
      petal.y = random(0, this.canvasHeight)
    }
    else {
      petal.x = random(0, this.canvasWidth)
      petal.y = -petal.r
    }
    petal.velX = 0
    petal.velY = random(this.props.velocity, this.props.velocity * 2)
    petal.rolling = random(0, 2*Math.PI)
    petal.opacity = 1
  }

  componentDidMount() {
    this.mounted = true
    this.context = this.refs.canvas.getContext('2d')
    this.canvasHeight = this.refs.canvas.offsetHeight
    this.canvasWidth = this.refs.canvas.offsetWidth
    this.refs.canvas.height = this.canvasHeight
    this.refs.canvas.width = this.canvasWidth

    this.update()
  }

  componentWillReceiveProps(props){
    if (JSON.stringify(this.props) === JSON.stringify(props)) {
      return
    }

    this.update(props)
  }

  update(props = this.props){

    this.img = new Image()
    this.img.onload = () => this.init(props)
    this.img.className = 'petal'
    this.img.src = Petal

    window.addEventListener('resize', this.handleResize)
    window.setTimeout(this.handleResize, 250)
  }

  handleResize = () => {
    if (!this.inited) return
    let H0 = this.refs.canvas.height,
    W0 = this.refs.canvas.width,
    H1 = this.refs.canvas.offsetHeight,
    W1 = this.refs.canvas.offsetWidth

    this.refs.canvas.height = this.canvasHeight = H1
    this.refs.canvas.width = this.canvasWidth = W1
    for (let i = 0; i < this.petals.length; i++) {
      let petal = this.petals[i]
      petal.x = petal.x / W0 * W1
      petal.y = petal.y / H0 * H1
    }
  }

  componentWillUnmount(){
    this.mounted = false
    window.removeEventListener('resize', this.handleResize)
  }

  render() {

    const Style = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zindex: this.props.zindex || 'auto'
    }

    return (
      <canvas
        ref="canvas"
        style={ Style }
      />
    )
  }
}

function random(min, max) {
  let delta = max - min
  return max === min ? min : Math.random() * delta + min
}

export default CherryBlossom
