# i18next Practice Monorepo

## 무엇인가?

- [deco27 - vampire](https://www.youtube.com/watch?v=e1xCOsgWG0M)의 가사를 한/영/일로 제공합니다.
- 기본적으로 한국어로 제공합니다.
- 상단 select에서 언어 변경이 가능합니다.

## 다국어 적용

- react-i18next 생태계를 이용합니다.
- 런타임에서, 다국어 리소스 파일을 불러옵니다.
- `i18next-http-backend`의 `Backend` 플러그인으로 구현했습니다. `loadPath`옵션에 적절한 backend api end point를 지정합니다.
- `i18n.changeLanguage`를 이용해 로케일 변경 후 (리소스 통한) 언어 적용이 가능합니다. Promise를 반환하므로, 적용 완료에 따른 로딩 상태 컨트롤이 가능합니다. (* 이를 위해 서버에서 고의적으로 2초의 지연이 발생하도록 했습니다.)

## 구조

- 로컬에서만 가능합니다. react와 express 개발서버를 구동해야합니다.
- react 프로젝트에서 언어를 선택하면, 로케일이 변경돼 적절한 end point(`/api/locales/:lng/:ns.json`)로 express 서버에 요청을 보냅니다.
- 해당 end point에선 locale에 따라 다국어 리소스 파일을 서빙합니다.

## 고민사항

- CSR 프로젝트이므로, 리소스는  js번들을 불러온 이후 fetch하는 waterfall이 발생하긴 합니다.
- 아마 이것은 namespace를 여러개로 쪼갠다면 가능하지 않을까 싶습니다. (스트리밍이 가능할진 몰겠네요.)