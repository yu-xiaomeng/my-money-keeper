import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'

const MIN_DISTANCE = 100
const MAX_INTERVAL = 10

export default class Tabs extends Component {
  static defaultProps = {
    tabList: [],
    current: 0,
    classHeaderName: '',
    onClick: () => {}
  }

  state = {
    animation: null,
    // 触摸时的原点
    _touchDot: 0,
    // 定时器
    _timer: null,
    // 滑动时间间隔
    _interval: 0,
    // 是否已经在滑动
    _isMoving: false
  }

  static options = {
    addGlobalClass: true
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.current !== nextProps.current) {
  //     this.translate(nextProps.current)
  //   }
  // }

  // promise setState
  customSetState(obj) {
    return new Promise(resolve => {
      this.setState(obj, () => {
        resolve(this.state)
      })
    })
  }

  handleClick(_id) {
    this.props.onClick(_id)
  }

  // async translate(id) {
  //   const animation = Taro.createAnimation({
  //     duration: 400,
  //     timingFunction: 'linear',
  //     delay: 0
  //   })

  //   const target = id * 100

  //   animation.translate3d(`-${target}%`, 0, 0).step()

  //   this.setState({
  //     animation: animation.export()
  //   })
  // }

  handleTouchStart(e) {
    // 获取触摸时的原点
    this._touchDot = e.touches[0].pageX
    // 使用js计时器记录时间
    this._timer = setInterval(() => {
      this._interval++
    }, 100)
  }

  handleTouchMove(e) {
    const { current, tabList } = this.props

    const touchMove = e.touches[0].pageX
    const moveDistance = touchMove - this._touchDot
    const maxIndex = tabList.length

    if (
      !this._isMoving &&
      this._interval < MAX_INTERVAL &&
      this._touchDot > 20
    ) {
      // 向左滑动
      if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
        this._isMoving = true
        this.handleClick(current + 1, e)

        // 向右滑动
      } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
        this._isMoving = true
        this.handleClick(current - 1, e)
      }
    }
  }

  handleTouchEnd() {
    clearInterval(this._timer)
    this._interval = 0
    this._isMoving = false
  }

  renderHeader() {
    const { tabList, current, classHeaderName } = this.props
    return tabList.map((item, _id) => {
      const itemCls = classNames(
        {
          'com-tabs-header-tab-active': _id === current
        },
        classHeaderName
      )
      return (
        <View
          key={'tabs_' + _id}
          className={itemCls}
          onClick={this.handleClick.bind(this, _id)}
        >
          {item.title}
          <View className='com-tabs-header-underline'></View>
        </View>
      )
    })
  }

  render() {
    const { children, current } = this.props
    const bodyStyle = {}
    const transformStyle = `translate3d(-${current * 100}%, 0px, 0px)`
    Object.assign(bodyStyle, {
      transform: transformStyle,
      '-webkit-transform': transformStyle
    })

    return (
      <View className='com-tabs'>
        <View className='com-tabs-header'>{this.renderHeader()}</View>
        <View
          className='com-tabs-content'
          onTouchStart={this.handleTouchStart.bind(this)}
          onTouchEnd={this.handleTouchEnd.bind(this)}
          onTouchMove={this.handleTouchMove.bind(this)}
        >
          <View className='com-tabs-content-inner' style={bodyStyle}>
            {children}
          </View>
        </View>
      </View>
    )
  }
}
