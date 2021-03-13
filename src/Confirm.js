import { useState, } from 'react';
import * as cognito from './cognito';

export default () => {
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');

  return (
    <div>
      <h3>hello, world. this is Confirm.js</h3>
      <p>username: <input type="text" autoComplete="username" value={username} onChange={e => setUsername(e.target.value)} /></p>
      <p>code: <input type="text" autoComplete="off" value={code} onChange={e => setCode(e.target.value)} /></p>
      <p><input type="button" value="confirm" onClick={() => { onClickConfirm(username, code); }} /></p>
    </div>
  );
}

async function onClickConfirm(username, code) {
  const result = await cognito.confirmRegistration(username, code);
  console.log({ result });
}