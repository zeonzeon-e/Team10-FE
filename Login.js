import { Link } from 'react-router-dom';
import React, { Component, useState } from 'react';
import axios from 'axios';
import SignUp from './SignUp';
import { Button, Input, Stack, WrapItem } from '@chakra-ui/react';

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
      <Stack spacing={4}>
      <div>
      <label>
        아이디
        <Input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      </div>
      <div>
      <label>
        비밀번호
        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      </div>
      <div >
      <Link to='/MyCard'>
        <Button colorScheme='pink' size='lg'>Login</Button>
      </Link>
      </div>
      <div>
      <Link to='/SignUp'>
        <Button colorScheme='green' size='lg'>Sign up</Button>
      </Link>
      </div>
      
      </Stack>
    </form>
  );
}

export default Login;
