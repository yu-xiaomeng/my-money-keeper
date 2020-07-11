import Taro, { useDidHide } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
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


  useDidHide(() => {
    clearInterval(this.timer)
  })

//   const handleJump = url => {
//     Taro.navigateTo({
//       url
//     })
//   }

  return (
    <View className='me'>
        <Text>我的</Text>

      {/* <View className='my-box-top'>
        <Image
          src={user.avatarUrl}
          onClick={handleJump.bind(this, '/pages/me/edit/index')}
        />
        <View className='info'>
          <Text className='info-name'>{user.alias}</Text>
          <Text className='info-contact'>
            {user.wechatId || user.phone || user.email || ''}
          </Text>
        </View>
        <View
          className='iconfont iconEdit'
          onClick={handleJump.bind(this, '/pages/me/edit/index')}
        />
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
      </View> */}
    </View>
  )
}

Me.config = {
  navigationBarTitleText: '我的'
}
