import config from './config';
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
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
        return false; // early return
      }

      resolve(result);
    }
  });

  return promise;
}

/**
 * 가입 인증
 */
export async function confirmRegistration(username, code) {
  var userData = {
    Username: username,
    Pool: userPool,
  };
  const cognitoUser = new CognitoUser(userData);
  
  const promise = new Promise((resolve, reject) => {
    cognitoUser.confirmRegistration(code, true, callback, null);

    function callback(err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        reject(err);
        return false; // early return
      }

      resolve(result);
    }
  });
  
  return promise;
}


/**
 * 로그인
 */
export async function authenticateUser(username, password) {
  const authenticationData = {
    Username: username,
    Password: password,
  };
  const authenticationDetails = new AuthenticationDetails(authenticationData);
  const userData = {
    Username: username,
    Pool: userPool,
  };
  const cognitoUser = new CognitoUser(userData);

  const promise = new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess,
      onFailure,
      // newPasswordRequired?: (userAttributes: any, requiredAttributes: any) => void;
      // mfaRequired?: (challengeName: any, challengeParameters: any) => void;
      // totpRequired?: (challengeName: any, challengeParameters: any) => void;
      // customChallenge?: (challengeParameters: any) => void;
      // mfaSetup?: (challengeName: any, challengeParameters: any) => void;
      // selectMFAType?: (challengeName: any, challengeParameters: any) => void;
    });

    function onSuccess(session, userConfirmationNecessary) {
      console.log('onSuccess()', { session, userConfirmationNecessary });
      resolve(session);
    }

    function onFailure(err) {
      console.log('onFailure()', { err });
      reject(err);
    }
  });

  return promise;
}
