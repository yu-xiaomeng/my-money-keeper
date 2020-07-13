import Taro from '@tarojs/taro'
import { View, Text, OpenData } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import './index.scss'

export default function Me() {
//   const list = [
//     {
//     //   iconLeft: 'iconSubscription',
//       name: '设置',
//       url: '/pages/team/index'
//     },
//     {
//     //   iconLeft: 'iconAbout',
//       name: '关于',
//       url: '/pages/about/index'
//     },
//     {
//     //   iconLeft: 'iconFeedback',
//       name: '吐个槽',
//       url: `/pages/about/index`
//     }
//   ]
//   const [user, setUser] = useState({})


  // useDidHide(() => {
  //   clearInterval(this.timer)
  // })

//   const handleJump = url => {
//     Taro.navigateTo({
//       url
//     })
//   }

  return (
    <View className='my-box-top'>
      <AtAvatar size='large' circle openData={{ type: 'userAvatarUrl'}}></AtAvatar>
      <View className='info'>
        <OpenData className='info-name' type='userNickName'></OpenData>
        <Text className='info-contact'>要加油记账哦！</Text>
      </View>
    </View>
  )
}

Me.config = {
  navigationBarTitleText: '我的'
}
