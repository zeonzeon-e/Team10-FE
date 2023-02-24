import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import SignUp from './SignUp';

function Login() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/login', { username, password })
      .then((response) => {
        // 로그인이 성공하면 다음 단계로 이동합니다.
      })
      .catch((error) => {
        // 로그인이 실패하면 오류를 표시합니다.
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>
        아이디:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      </div>
      <div>
      <label>
        비밀번호:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      </div>
      <div>
      <button type="submit">Login</button>
      </div>
      <div>
        <Link to='/SignUp'>
        <button classname="SignUp" type="submit">Sign up</button>
        </Link>
      </div>
    </form>
  );
}

export default Login;
