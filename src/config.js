require('dotenv').config();

export default {
  region: process.env.REACT_APP_REGION,
  IdentityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
  UserPoolId: process.env.REACT_APP_USER_POOL_ID,
  ClientId: process.env.REACT_APP_CLIENT_ID,
}