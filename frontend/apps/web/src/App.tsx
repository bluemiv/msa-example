import React from 'react';
import './App.css';
import { FetchAndButton } from './features';

function App() {
  return (
    <div className="App">
      <FetchAndButton
        desc="로그인을 하는 테스트"
        buttonLabel="로그인"
        onClick={() => console.log('click')}
      ></FetchAndButton>
      <FetchAndButton
        desc="회원 정보를 가져오는 테스트"
        buttonLabel="로그인"
        onClick={() => console.log('click')}
      ></FetchAndButton>
      <FetchAndButton
        desc="결제를 하는 테스트"
        buttonLabel="로그인"
        onClick={() => console.log('click')}
      ></FetchAndButton>
    </div>
  );
}

export default App;
