import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default function Plan() {
  return (
    <View className='plan'>
      <Text>计划</Text>
    </View>
  )
}

Plan.config = {
  navigationBarTitleText: '计划'
}
