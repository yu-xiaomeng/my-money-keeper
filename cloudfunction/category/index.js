const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database()

async function main(event) {

  if (event.categoryName == null) {
    const result = await db.collection('category').get()
    return {
      category: result.data
    } 
  } else {
    const result = await db.collection('category').where({
      first: event.categoryName
    }).get()
  
    return {
      category: result.data
    }
  }


}

exports.main = main;
