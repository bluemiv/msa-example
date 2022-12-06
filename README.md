# 구조

![이미지](./docs/images/architecture.png)

- 클라이언트(Mobile, WEB, Desktop App)는 오로지 API Gateway와 통신한다.
- API Gateway는 필요한 정보를 가지고 있는 각 서버에 요청을 보내서 하나의 데이터로 취합하여 클라이언트에게 전달해준다.