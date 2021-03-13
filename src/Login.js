import { useState, } from 'react';
import * as cognito from './cognito';

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h3>hello, world. this is Login.js</h3>
      <p>username: <input type="text" autoComplete="username" value={username} onChange={e => setUsername(e.target.value)} /> </p>
      <p>password: <input type="password" name="password" autoComplete="password" value={password} onChange={e => setPassword(e.target.value)} /> </p>
      <p><input type="button" value="login" onClick={() => onClickLogin(username, password)} /></p>
    </div>
  );
}

async function onClickLogin(username, password) {
  const result = await cognito.authenticateUser(username, password);
  console.log('onClickLogin()', { result });
}