import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 이메일, 비밀번호, 이름을 사용하여 회원가입 처리
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이메일:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        비밀번호:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <label>
        이름:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <Link to ="/">
      <button type="submit">회원가입</button>
      </Link>
    </form>
  );
}

export default SignUp;
