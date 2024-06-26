# Waiker Open API (Typescript) Samples

웨이커 오픈 API를 Node.js 환경에서 사용하기 위한 샘플 코드 레포지토리입니다.  
Typescript 로 작성되어 있으며, Request, Response 타입들이 정의되어 있습니다.  
**정의된 Type 들은 API 버전에 따라 변경될 수 있으니, [웨이커 API 문서](https://docs.waiker.ai/) 를 확인해주세요**

> 샘플 코드는 Axios를 사용하여 작성되었습니다.  
> 브라우저와 Node.js 환경 모두 호환하기 위함이므로, 실제 사용시에는 원하는 라이브러리를 적절히 사용하시기 바랍니다.

## 인증 정보 생성을 위한 사전 작업

[문서보기](https://docs.waiker.ai/v2.0.0/docs/%EC%9D%B8%EC%A6%9D%ED%82%A4-%EC%9A%94%EC%B2%AD%ED%95%98%EA%B8%B0)

인증 정보를 생성하기위해 사전에 [Waiker Dashboard](https://dashboard.waiker.ai/key-management) 에서 생성한

- **Product Key**
- **UserKey**
- **SecretKey**

위 세가지 정보가 필요합니다.

## 인증 헤더 정보

HTTP Header로 인증정보를 전달하며 필요한 인증 정보는 아래와 같습니다.

| Header             | value                                                                 |
| ------------------ | --------------------------------------------------------------------- |
| Waiker-Product-Key | 웨이커에서 발행되는 프로덕트 키                                       |
| Authorization      | Bearer {웨이커에서 발행되는 유저키와 시크릿 키를 이용하여 생성한 JWT} |

## JWT 생성 방법

웨이커에서 발행되는 **User Key**를 **Secret Key**로 서명한 JWT입니다.
서명방식은 **HS256**을 사용하며, payload는 아래와 같습니다.

```
{
  "userKey" : "{userKey}"
}
```

## JWT 서명 예제

`.env` 파일에 키를 입력하면, 샘플 코드를 실행할 수 있습니다.

```typescript
const jwt = require("jsonwebtoken");

const USER_KEY = "YOUR_USER_KEY";
const SECRET_KEY = "YOUR_SECRET_KEY";

const payload = { userKey: USER_KEY };

/** API 요청 헤더에 포함될 Bearer 토큰 **/
const jwtToken = jwt.sign(payload, SECRET_KEY);
```

## 공통 요청 헤더 (Required)

```ts
    headers: {
		accept: 'application/json',
		Authorization: bearerToken, //위에서 서명한 토큰
		'Waiker-Product-Key': YOUR_PRODUCT_KEY,
		'Accept-Country': 'US' | 'KR',
		'Accept-Currency': 'USD' | 'KRW',
		'Accept-Language': 'KO' | 'EN',
	}
```
