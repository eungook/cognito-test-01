require('dotenv').config();

export default {
  region: '',
  IdentityPoolId: '',
  UserPoolId: process.env.REACT_APP_USER_POOL_ID,
  ClientId: process.env.REACT_APP_CLIENT_ID,
}