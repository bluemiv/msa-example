import React from 'react';
import './App.css';
import { FetchAndButton } from './features';
import { useLazyQuery } from '@apollo/client';
import { authenticationSchema, paymentSchema, userSchema } from './schema';
import totalSchema from './schema/total';

type TAuthentication = {
  username: string;
  token: string;
};

type TUser = {
  id: number;
  username: string;
  password?: string;
  email: string;
};

type TPayment = {
  id: number;
  price: number;
  type: string;
};

function App() {
  const [fetchAuthentication, fetchAuthenticationRes] = useLazyQuery(authenticationSchema.FETCH_AUTH_TOKEN);

  const [fetchUser, fetchUserRes] = useLazyQuery(userSchema.FETCH_USER);
  const [fetchUsers, fetchUsersRes] = useLazyQuery(userSchema.FETCH_USERS);

  const [fetchPayment, fetchPaymentRes] = useLazyQuery(paymentSchema.FETCH_PAYMENT);
  const [fetchPayments, fetchPaymentsRes] = useLazyQuery(paymentSchema.FETCH_PAYMENTS);

  const [fetchTotal, fetchTotalRes] = useLazyQuery(totalSchema.FETCH_TOTAL);

  return (
    <div className="container">
      <FetchAndButton desc="로그인을 하는 테스트" buttonLabel="로그인" onClick={fetchAuthentication}>
        {fetchAuthenticationRes.loading
          ? 'loading'
          : [
              `이름: ${fetchAuthenticationRes.data?.authentication?.username}`,
              `토큰: ${fetchAuthenticationRes.data?.authentication?.token}`,
            ].join(' / ')}
      </FetchAndButton>
      <FetchAndButton desc="특정 회원 정보를 가져오는 테스트" buttonLabel="회원 정보 가져오기" onClick={fetchUser}>
        {fetchUserRes.loading
          ? 'loading'
          : `ID: ${fetchUserRes.data?.user?.id} / 이름: ${fetchUserRes.data?.user?.username}`}
      </FetchAndButton>
      <FetchAndButton desc="회원 목록을 가져오는 테스트" buttonLabel="회원 목록 가져오기" onClick={fetchUsers}>
        {fetchUsersRes.loading ? (
          'loading'
        ) : (
          <ul>
            {fetchUsersRes.data?.users?.map((user: TUser) => (
              <li key={user.id || 0}>
                {user.id} / {user.username} / {user.email}
              </li>
            ))}
          </ul>
        )}
      </FetchAndButton>
      <FetchAndButton
        desc="특정 결제 정보를 가져오는 테스트"
        buttonLabel="특정 결제 정보 가져오기"
        onClick={fetchPayment}
      >
        {fetchPaymentRes.loading
          ? 'loading'
          : [
              `ID: ${fetchPaymentRes.data?.payment?.id}`,
              `가격: ${fetchPaymentRes.data?.payment?.price}`,
              `결제방법: ${fetchPaymentRes.data?.payment?.type}`,
            ].join(' / ')}
      </FetchAndButton>
      <FetchAndButton
        desc="특정 결제 정보 목록을 가져오는 테스트"
        buttonLabel="결제 정보 목록 가져오기"
        onClick={fetchPayments}
      >
        {fetchPaymentsRes.loading ? (
          'loading'
        ) : (
          <ul>
            {fetchPaymentsRes.data?.payments?.map((payment: TPayment) => (
              <li key={payment.id || 0}>
                {payment.id} / {payment.price} / {payment.type}
              </li>
            ))}
          </ul>
        )}
      </FetchAndButton>
      <FetchAndButton desc="모든 정보 한번에 불러오기" buttonLabel="모든 정보 가져오기" onClick={fetchTotal}>
        {fetchTotalRes.loading
          ? 'loading'
          : [
              `이름: ${fetchTotalRes.data?.total?.user?.username}`,
              `결제한 금액: ${fetchTotalRes.data?.total?.payment?.price}`,
              `Token: ${fetchTotalRes.data?.total?.authentication?.token}`,
            ].join(' / ')}
      </FetchAndButton>
    </div>
  );
}

export default App;
