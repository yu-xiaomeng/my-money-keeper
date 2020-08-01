import Taro, {Component} from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtGrid } from 'taro-ui'
import './index.scss'


export default class ExpenseCategory extends Component {
  constructor(props) {
    super(props)
    this.state = { category: [{ 
      first: "食物",
      second: "早餐",
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
  render() {
    return (
      <View className='expense-category'>
        <View className='category-name'>
          <Text>食物</Text>
        </View>
        <View className='category-icon'>
          <AtGrid mode='square' hasBorder={false} columnNum={6} data={
            [
                {
                image: this.state.category[0].image,
                value: this.state.category[0].second
                },
                {
                  image: this.state.category[1].image,
                  value: this.state.category[1].second
                },
                {
                  image: this.state.category[2].image,
                  value: this.state.category[2].second
                },
                {
                  image: this.state.category[3].image,
                  value: this.state.category[3].second
                },
              ]
            } 
          />
        </View>
        <View className='category-name'>
          <Text>服饰</Text>
        </View>
        <View className='category-icon'>
          <AtGrid mode='square' hasBorder={false} columnNum={6} data={
            [
                {
                image: this.state.category[4].image,
                value: this.state.category[4].second
                },
                {
                  image: this.state.category[5].image,
                  value: this.state.category[5].second
                },
                {
                  image: this.state.category[6].image,
                  value: this.state.category[6].second
                },
              ]
            } 
          />
        </View>
      </View>  
    )
  }
}

ExpenseCategory.options = {
  addGlobalClass: true
}
