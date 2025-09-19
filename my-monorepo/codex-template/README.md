Codex Template — API + Hook Generator

Overview
- @sizlcorp/sizl-api-document 타입으로부터 Query 모듈과 React Query 훅을 생성합니다.
- packages/core 에서 이미 사용 중인 스타일(query-key-factory + axios 인스턴스)을 그대로 따릅니다.

Usage
1) 설정 JSON을 준비합니다(예: examples/users.config.json 참고).
2) 생성기를 실행합니다:
   node codex-template/generate.mjs --config codex-template/examples/users.config.json

Auto Mode
- 명령어: npm run generate:master:auto
- 동작:
  - @sizlcorp/sizl-api-document를 최신으로 업데이트합니다(--no-update로 생략 가능).
  - @core/instance/axios.ts에서 참조하는 모든 API 클래스(DefaultApi, MasterApi, UserApi, ProductionActionApi, SpcApi, Tracking, Scm, …)를 스캔합니다.
  - 모든 오퍼레이션(…Get, …FindPost, …Post, …Put, …Delete, …Patch)을 수집합니다.
  - 리소스 루트 기준으로 메서드를 그룹화하고, 올바른 axios Instance를 사용하여 query + hooks를 생성합니다.
  - 필요한 것만 생성합니다: 쿼리만 있으면 Query 키/훅만, 뮤테이션만 있으면 Mutation 키/훅만 생성합니다. 둘 다 있으면 둘 다 생성합니다.
  - 이미 존재하는 packages/core/src/api/<resource>는 건너뜁니다.

옵션
- `--no-update`: 패키지 업데이트 생략
- `--dry-run`: 실제 파일 생성 없이 생성 대상만 출력
- `--overwrite` 또는 `--regen`: 기존 리소스도 덮어쓰기(재생성)
- `--filter <resource>`: 특정 리소스만 대상으로 제한(예: `--filter users`)


What it does
- packages/core/src/api/<resource>/<resource>Query.ts 파일을 생성합니다. 내부에는 존재하는 작업만 포함됩니다(createQueryKeys/createMutationKeys/mergeQueryKeys가 조건부로 포함).
- packages/core/src/hooks/<resource>/use<Resource>Query.ts 파일을 생성합니다(쿼리가 있을 때만).
- packages/core/src/hooks/<resource>/use<Resource>Mutation.ts 파일을 생성합니다(뮤테이션이 있을 때만).
- @core/instance/axios 인스턴스(예: MasterInstance)와 @sizlcorp/sizl-api-document/dist/models 타입을 사용합니다.

Config schema (partial)
- resource: 폴더/식별자에 사용될 kebab/camel 이름(예: "users").
- instance: 호출에 사용할 axios 인스턴스(예: "MasterInstance").
- key: 쿼리 키 프리픽스(예: "USERS").
- queries[]: 읽기 작업 목록
  - name: 함수명 접미사(예: "get", "getSelect").
  - method: 인스턴스 메서드(예: "usersGet").
  - requestType: 요청 DTO 타입.
  - select: 선택: { responseType: string } — AxiosResponse.data를 매핑.
- mutations[]: 쓰기 작업 목록
  - name: 함수명 접미사(예: "update").
  - method: 인스턴스 메서드(예: "usersUserIdPut").
  - requestType: 요청 DTO 타입.
  - keyFields: mutationKey 구성에 사용할 파라미터 필드 배열.

Notes
- 생성기는 타입을 동적으로 해석하지 않습니다. 설정 파일에 @sizlcorp/sizl-api-document/dist/models 의 정확한 타입명을 기입하세요.
- 경로는 @core/* alias를 사용합니다. tsconfig.base.json 구성이 이미 포함되어 있는지 확인하세요.
- 훅은 합리적인 React Query 기본 옵션을 사용합니다. 필요 시 생성 후 수정하세요.
