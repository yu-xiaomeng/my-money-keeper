import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtList, AtListItem, AtButton } from "taro-ui"
import './index.scss'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { currentBookName: '账本' }
  }
  componentWillMount () { 
    Taro.cloud.init()
    const loginStatus = Taro.getStorageSync("loginStatus")
    const userId = Taro.getStorageSync("userId")
    
    if (loginStatus!="loginOK") {
      Taro.login({
        success: function (res) {
          if (res.code) {
            Taro.cloud
                .callFunction({
                  name: 'login',
                  data: {
                    code: res.code
                  }
            }).then(({ errMsg, result }) => {
              console.log(errMsg, result)
              Taro.setStorageSync('loginStatus', result.message)
              Taro.setStorageSync('userId', result.userId)
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    } 

    if (userId) {
      Taro.cloud.callFunction({
        name: 'getdefaultbook',
        data: {
          userId: userId,
          limit: 1
        }
      }).then(({ errMsg, result }) => {
        console.log(errMsg, result)
        this.setState({currentBookName: result.firstBook.data[0].name})
      })
    }
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '小梦记账'
  }

  goToTrackingDailyCost() {
    Taro.navigateTo({
      url: '/pages/trackingDailyCost/index'
    })
  }
  render () {
    return (
      <View className='index'>
        <View className='top-box'>
          <View className='book-name'>
            <Text className='iconfont iconExpand'></Text>
              <Text>{this.state.currentBookName}</Text>
          </View>
          <View className='tools'>
            <AtButton type='primary' size='small' onClick={this.goToTrackingDailyCost}>
              <Text className='iconfont iconAdd'></Text>
                记账
            </AtButton>
          </View>
        </View>
        <AtList>
            <AtListItem
              title='早餐'
              arrow='right'
              thumb='cloud://dev-cw962.6465-dev-cw962-1301761256/breakfast.png'
            />
          </AtList>
      </View>
    )
  }
}
