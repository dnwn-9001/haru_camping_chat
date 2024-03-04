# 하루캠핑챗
http://haru-camping-chat.co.kr/
<br/>
지역별 실시간 캠핑 정보 공유 웹 채팅 사이트.
<br/>
<br/>


## 프로젝트 설명
### 1. 주요기능

- socket.io 라이브러리를 이용한 실시간 채팅 기능
- supabase 라이브러리를 이용한 OAuth 로그인
- 인터렉티브한 메인 페이지 구현을 위한 페럴렉스 적용
- 사이트 밝기 on/off 기능

<br/>

### 2. 사용된 기술 및 언어
- Next.js
- reduxjs/toolkit
- Typescript
- styled-components
- socket.io / socket.io-client
- axios
- supabase
- antd(일부 컴포넌트)
<br/>

### 3. 배포 환경
- AWS ec2 (Ubuntu 20.04)
- AWS S3 : 정적 파일 업로드(이미지, 글꼴)
- Nginx 
- nodejs
- pm2

<br/>

### 4. 개발 예정
- 익명 투표 게시판
  1. 캠핑 관련 투표 받고싶은 질문을 익명으로 게시하고 투표 받는 게시판
  2. 투표 결과를 라이브러리를 이용하여 차트로 보여줄 수 있도록 구현


