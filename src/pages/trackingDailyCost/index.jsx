import Taro, {Component} from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import './index.scss'


export default class TrackingDailyCost extends Component {
  constructor(props) {
    super(props);
    this.state = { category: [{ 
      first: "类别",
      second: "",
      image: "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
    }]}
  }
  componentDidMount() {
    Taro.cloud.init()
    Taro.cloud
        .callFunction({
          name: 'category',
          data: {
            categoryName: null
          }
        }).then(({ errMsg, result }) => {
          console.log(errMsg, result)
          this.setState({category: result.category})
        })
  }

  config = {
    navigationBarTitleText: '记账'
  }

  render() {
    return (
      <View className='tracking-daily-cost'>
        <AtList>
          {this.state.category.map(item => (
            <AtListItem
              key={item._id}
              title={item.first + " - " + item.second}
              // note={item.second}
              arrow='right'
              thumb={item.image}
            />
          ))}
          </AtList>
          
      </View>  
    )
  }
}

TrackingDailyCost.options = {
  addGlobalClass: true
}
