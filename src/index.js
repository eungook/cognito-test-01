import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import config from './config';
import {
  CognitoUserPool,
  CognitoUserAttribute,
	CognitoUser,
} from "amazon-cognito-identity-js";

console.log('config:', config);

var poolData = {
	UserPoolId: config.UserPoolId, // Your user pool id here
	ClientId: config.ClientId, // Your client id here
};

// var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var userPool = new CognitoUserPool(poolData);

var attributeList = [];

var dataEmail = {
	Name: 'email',
	Value: 'email2@mydomain.com',
};

var dataPhoneNumber = {
	Name: 'phone_number',
	Value: '+15555555556',
};
// var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
var attributeEmail = new CognitoUserAttribute(dataEmail);
// var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(
var attributePhoneNumber = new CognitoUserAttribute(
	dataPhoneNumber
);

attributeList.push(attributeEmail);
attributeList.push(attributePhoneNumber);

userPool.signUp('username3', 'password', attributeList, null, function(
	err,
	result
) {
	if (err) {
		alert(err.message || JSON.stringify(err));
		return;
	}
	var cognitoUser = result.user;
	console.log('user name is ' + cognitoUser.getUsername());
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
