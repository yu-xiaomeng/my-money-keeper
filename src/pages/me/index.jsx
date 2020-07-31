import Taro from '@tarojs/taro'
import { View, Text, OpenData } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import './index.scss'

export default function Me() {
  const list = [
    {
    //   iconLeft: 'iconSubscription',
      name: '设置',
      url: '/pages/setting/index'
    },
    {
    //   iconLeft: 'iconAbout',
      name: '关于',
      url: '/pages/about/index'
    },
    {
    //   iconLeft: 'iconFeedback',
      name: '吐个槽',
      url: `/pages/feedback/index`
    }
  ]
//   const [user, setUser] = useState({})


  // useDidHide(() => {
  //   clearInterval(this.timer)
  // })

  const handleJump = url => {
    Taro.navigateTo({
      url
    })
  }

  return (
    <View class='my-box'>
    <View className='my-box-top'>
      <AtAvatar size='large' circle openData={{ type: 'userAvatarUrl'}}></AtAvatar>
      <View className='info'>
        <OpenData className='info-name' type='userNickName'></OpenData>
        <Text className='info-contact'>要加油记账哦！</Text>
      </View>
    </View>
    <View className='my-box-bottom'>
      {list.map(item => (
        <View
          className='my-box-bottom-list'
          key={item.name}
          onClick={handleJump.bind(this, item.url)}
        >
          <Text className={'icon iconfont ' + item.iconLeft}></Text>
          <Text className='text'>{item.name}</Text>
          <Text className='iconfont iconArrow'></Text>
        </View>
      ))}
    </View>
  </View>
  )
}

Me.config = {
  navigationBarTitleText: '我的'
}
