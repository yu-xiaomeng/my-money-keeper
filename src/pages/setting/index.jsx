import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Tabs from '@components/tabs'
import TabsPane from '@components/tabs-pane'
import ExpenseCategory from './ExpenseCategory'
import IncomeCategory from './IncomeCategory'

import './index.scss'
// import { AtTabs, AtTabsPane } from 'taro-ui'

// export default class Settings extends Taro.Component {
//     constructor () {
//       super(...arguments)
//       this.state = {
//         current: 0,
//       }
//     }
//     handleClick (value) {
//       this.setState({
//         current: value
//       })
//     }
//     render () {
//       const tabList = [{ title: '支出' }, { title: '收入' }]
//       return (
//         <View>
//             <Text>类别</Text>
//             <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
//             <AtTabsPane current={this.state.current} index={0} >
//                 <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >
//                     <Text className='iconfont iconArrow'></Text>
//                 </View>
//             </AtTabsPane>
//             <AtTabsPane current={this.state.current} index={1}>
//                 <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>

//                 </View>
//             </AtTabsPane>
//             </AtTabs>
//         </View>
//       )
//     }
//   }
const tabList = [
  {title: '支出'},
  {title: '收入'}
]

export default function Settings() {
    function  handleClick (value) {
      this.setState({
        current: value
      })
    }

  return (
    <View className='index'>
      <View className='tabs-box'>
        <Tabs
          current={this.state.current}
          tabList={tabList}
          onClick={handleClick.bind(this)}
        >
          <TabsPane current={this.state.current} index={0}>
            <ExpenseCategory />
          </TabsPane>
          <TabsPane current={this.state.current} index={1}>
            <IncomeCategory />
          </TabsPane>
        </Tabs>
      </View>
    </View>
  )
}

Settings.config = {
  navigationBarTitleText: '设置'
}