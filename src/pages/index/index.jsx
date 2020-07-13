import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import './index.scss'

export default class Index extends Component {

  componentWillMount () { 
    Taro.cloud.init()
    const loginStatus = Taro.getStorageSync("loginStatus")
    
    if (loginStatus!="loginOK") {
      console.log("start log in")
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
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
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

  render () {
    return (
      <View className='index'>
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
