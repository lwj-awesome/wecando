# Theme

framer
// https://www.framer.com/gallery/alejandromejiascomau


- src > color > value > dark === darkmode Color
- src > color > value > light === lightmode Color

src > color > palette

- value Color를 기준으로 재정의
- 실제 사용할 컬러 변수

themes/scripts > build-css-module.js

- 위 정의한 컬러 변수를 css 파일로 내보내게 하는 css 생성기

test.ts -> 테스트용 apps/web/pages에서 사용 중

## esbuild-config

- build-css-module.js 기본 설정 빌드
- 다른 패키지 빌드시에도 사용할 수 있을 것 같아 생성

## eslint-config, typescript-config

- Turborepo 기본생성 패키지

## apps/web

color test용으로 사용 (ui, theme workspace 사용)
