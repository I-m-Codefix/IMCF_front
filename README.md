# 본 프로젝트는 CRA(Create Ract App)을 통해 작성됨.

이 프로젝트는 IMCF 팀의 프로젝트입니다.

## 사용 가능한 스크립트

본 프로젝트에서는 해당 스크립트를 사용할 수 있음:

### `npm run dev`

본 프로젝트를 development 모드로 실행함.
열기: [http://localhost:5000](http://localhost:5000)

코드 수정 사항이 실시간으로 변경되는 것을 확인할 수 있음.
에러 사항은 콘솔을 통해 확인 가능.

### `npm start`

Production 서버에서 pm2를 통해 배포.
prestart 옵션으로 build가 먼저 진행된 뒤 실행.

### `npm test`

테스트 실행 모드.
테스트 모드에 관한 정보 [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build`

프로젝트를 Production 모드로 `build`함.
해쉬를 통해 캐싱된 파일들을 배포할 수 있음.

배포에 관한 정보. [deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run eject`

**`eject`를 실행할 경우 이전 상태로 파일을 되돌릴 수 없으니 주의!!!**

이 프로젝트는 CRA로 작성되었기 때문에 내부 설정 파일이 숨겨져 있음.
`eject` 스크립트로 세부 내용을 수정할 수 있지만 다시 숨김으로 설정할 수 없음.