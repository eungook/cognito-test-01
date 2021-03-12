import { useState, } from 'react';
import * as cognito from './cognito';

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');

  return (
    <div>
      <h3>hello, world. this is Join.js</h3>
      <p>username: <input type="text" autoComplete="username" value={username} onChange={e => setUsername(e.target.value)} /> </p>
      <p>password: <input type="password" name="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} /> </p>
      <p>re-enter password: <input type="password" name="password2" autoComplete="new-password" value={password2} onChange={e => setPassword2(e.target.value)} /> </p>
      <p>email: <input type="text" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} /> </p>
      <p>phone_number: <input type="text" autoComplete="tel" value={phone_number} onChange={e => setPhoneNumber(e.target.value)} /> </p>
      <p><input type="button" value="join" onClick={onClickJoin} /></p>
    </div>
  );

  async function onClickJoin() {
    console.log({
      username,
      password,
      password2,
      email,
      phone_number,
    });

    const result = await cognito.signUp(username, password, email, phone_number);
    console.log({ result });
  }
}