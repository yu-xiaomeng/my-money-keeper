import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default function Statistics() {
  return (
    <View className='statistics'>
      <Text>统计</Text>
    </View>
  )
}

Statistics.config = {
  navigationBarTitleText: '统计'
}