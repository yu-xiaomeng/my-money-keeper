import Taro, {Component} from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtGrid } from 'taro-ui'
import './index.scss'


export default class ExpenseCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {category: "暂无分类"}
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
  
  // return (
  //   <View className='expense-category'>
  //       <View className='category-name'>
  //           <Text>{categories[0].first}</Text>
  //       </View>
  //       <View className='category-icon'>
  //         <AtGrid mode='square' hasBorder={false} columnNum={6} data={
  //           [
  //               {
  //               image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
  //               value: '早餐'
  //               },
  //               {
  //               image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
  //               value: '午餐'
  //               },
  //               {
  //               image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
  //               value: '晚餐'
  //               },
  //               {
  //               image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
  //               value: '超市'
  //               },
  //               {
  //               image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
  //               value: '聚餐'
  //               }
  //             ]
  //           } 
  //         />
  //       </View>  
  //   </View>
  // )
}

ExpenseCategory.options = {
  addGlobalClass: true
}
