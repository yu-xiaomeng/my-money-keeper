/* eslint-disable import/no-commonjs */
const cloud = require('./node_modules/wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database()

async function main(event) {
  console.log(event.userId)
  const book = await db.collection('book').where({
    userId: event.userId
  }).limit(event.limit).get()

  return {
    firstBook: book
  }

}

exports.main = main;
