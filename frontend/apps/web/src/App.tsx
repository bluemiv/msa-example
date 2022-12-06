import React from 'react';
import './App.css';
import { FetchAndButton } from './features';
import { useLazyQuery } from '@apollo/client';
import { userSchema } from './schema';

type TUser = {
  username: string;
};

function App() {
  const [fetchUser, fetchUserRes] = useLazyQuery(userSchema.FETCH_USER);
  const [fetchUsers, fetchUsersRes] = useLazyQuery(userSchema.FETCH_USERS);

  return (
    <div className="App">
      <FetchAndButton desc="로그인을 하는 테스트" buttonLabel="로그인" onClick={() => fetchUser()}></FetchAndButton>
      <FetchAndButton desc="특정 회원 정보를 가져오는 테스트" buttonLabel="회원 정보 가져오기" onClick={fetchUser}>
        {fetchUserRes.loading ? 'loading' : `이름: ${fetchUserRes.data?.user?.username}`}
      </FetchAndButton>
      <FetchAndButton desc="회원 목록을 가져오는 테스트" buttonLabel="회원 목록 가져오기" onClick={fetchUsers}>
        {fetchUsersRes.loading ? (
          'loading'
        ) : (
          <ul>
            {fetchUsersRes.data?.users?.map((user: TUser) => (
              <li>{user?.username}</li>
            ))}
          </ul>
        )}
      </FetchAndButton>
      <FetchAndButton desc="결제를 하는 테스트" buttonLabel="결제하기" onClick={() => fetchUser()}></FetchAndButton>
    </div>
  );
}

export default App;
