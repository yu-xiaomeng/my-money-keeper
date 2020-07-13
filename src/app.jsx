import Taro, { Component} from '@tarojs/taro'
import Index from './pages/index'
import './styles/theme.scss'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index',
      'pages/statistics/index',
      'pages/plan/index',
      'pages/me/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '小梦记账',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      borderStyle: 'black',
      selectedColor: '#02A577',
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: './assets/images/bookkeeping.png',
          selectedIconPath: './assets/images/bookkeeping-selected.png',
          text: '记账'
        },
        {
          pagePath: 'pages/statistics/index',
          iconPath: './assets/images/statistics.png',
          selectedIconPath: './assets/images/statistics-selected.png',
          text: '统计'
        },
        // {
        //   pagePath: 'pages/statistics/index',
        //   iconPath: './assets/images/add-index.png',
        //   selectedIconPath: './assets/images/add-index.png'
        // },
        {
          pagePath: 'pages/plan/index',
          iconPath: './assets/images/plan.png',
          selectedIconPath: './assets/images/plan-selected.png',
          text: '计划'
        },
        {
          pagePath: 'pages/me/index',
          iconPath: './assets/images/me.png',
          selectedIconPath: './assets/images/me-selected.png',
          text: '我的'
        }
      ]
    }

  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
