import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'

export default class TabsPane extends Component {
  static defaultProps = {
    index: 0,
    current: 0,
    className: '',
    customStyle: ''
  }
  
  static options = {
    addGlobalClass: true
  }

  render() {
    const { index, current, className, customStyle, children } = this.props
    return (
      <View
        className={classNames(
          {
            'com-tabs-pane': true,
            'com-tabs-pane-active': current === index,
            'com-tabs-pane-inactive': current !== index
          },
          className
        )}
        style={customStyle}
      >
        {children}
      </View>
    )
  }
}
