import config from './config';
import {
  CognitoUserPool,
  CognitoUserAttribute,
	CognitoUser,
} from 'amazon-cognito-identity-js';

const poolData = { ...config, };
const userPool = new CognitoUserPool(poolData);

/**
 * 회원가입
 */
export async function signUp(username, password, email, phone_number) {
  const userAttributes = [];
  userAttributes.push(new CognitoUserAttribute({ Name: 'email', Value: email }));
  userAttributes.push(new CognitoUserAttribute({ Name: 'phone_number', Value: phone_number }));

  const promise = new Promise((resolve, reject) => {
    userPool.signUp(username, password, userAttributes, null, callback, null);

    function callback (err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        reject(err);
        return; // early return
      }

      resolve(result);
    }
  });

  return promise;
}