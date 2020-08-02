/* eslint-disable import/no-commonjs */
const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();
const { v4 } = require('uuid');

class User {
  constructor(openId) {
      this.openId = openId
  }

  validate () {
      if (!this.openId) {
          throw 'openId can not be null';
        }      
  }
}

async function main(event, context) {
  console.log(event);
  console.log(context);

  const wxContext = cloud.getWXContext();
  const openId = wxContext.OPENID;
  let { data }  = await db.collection("user").where({ openId: db.command.eq(openId) }).get().catch(console.log);
  let user = data[0];

  if(user) {
    return {
      message: "loginOK"
    }
  } else {
      user = new User({ openId });
      try {
        user.validate();
        await db.collection("user").add({
          data: {
            _id: v4(),
            openId: openId,
          }
        });
      } catch (e) {
        return {
          message: "failed to create user"
        }
      }
      return {
        message: "create a new user"
      }
    }
}

exports.main = main;
