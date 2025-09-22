GET API Autocomplete

- 목적: `@sizlcorp/sizl-api-document`의 컬렉션 GET 엔드포인트를 기반으로
  - 경로 목록 JSON(`get-endpoints.json`) 생성
  - 각 리소스별 `GetAutocomplete` 컴포넌트 템플릿을 스캐폴딩합니다.

사용 방법

- 0) 최신 문서 업데이트
  - 기본값으로 `@sizlcorp/sizl-api-document`를 최신으로 업데이트합니다.
  - 생략하려면 `--no-update` 플래그를 사용하세요.

- 1) 목록만 생성 (OpenAPI → JSON)
  - `npm run generate:autoComplete`
  - `node_modules/@sizlcorp/sizl-api-document/apisrc/openapi.yaml`에서 path param이 없는 `get:` 컬렉션 경로를 추출해
    `packages/core/src/api/get-endpoints.json`을 생성합니다.

- 2) 전체 컴포넌트 템플릿 생성
  - `npm run generate:autoComplete -- --emit-components`
  - 각 리소스에 대해 `packages/core/src/components/organisms/autocomplete/<Resource>GetAutocomplete.tsx` 파일을 생성합니다.
  - 이미 존재하는 파일은 건너뜁니다.
  - 해당 리소스의 React Query 훅이 존재하지 않으면 생성하지 않고 경고합니다.

- 3) 선택적으로 일부만 생성(인터랙티브)
  - `npm run generate:autoComplete -- --pick`
  - 표시되는 컬렉션 GET 목록에서 번호(예: `1,3,5` 또는 `2-6`) 혹은 경로 키워드(예: `items`, `grades`)를 입력해 선택합니다.
  - `*` 또는 `all` 입력 시 전체를 선택합니다.
  - 동작만 확인하려면 `--dry-run`을 함께 사용할 수 있습니다.

동작 원칙
- Autocomplete 템플릿은 기존에 생성된 훅(`packages/core/src/hooks/api/<resource>/use<Pascal>Query.ts`)의
  `use<Pascal><Pascal>GetQuery`를 import하여 사용합니다.
- 해당 훅/파일이 존재하지 않는 경우, "관련 API/Hook을 찾을 수 없습니다" 메시지를 출력하고 스캐폴딩을 건너뜁니다.
- 훅이 없다면 먼저 `npm run generate:document:auto` 또는 적절한 `auto-generate` 스크립트로 쿼리 훅을 생성하세요.

예시: 목록 기반 공용 검색 UI

  import { useState } from "react";
  import { FindApiAutocomplete, type FindApiItem } from "@core";
  import getItems from "@core/api/get-endpoints.json";
  
  export function FindDemo() {
    const [selected, setSelected] = useState<FindApiItem | null>(null);
    
    return (
      <div style={{ maxWidth: 420 }}>
        <FindApiAutocomplete
          items={getItems}
          onSelect={(item) => setSelected(item)}
          placeholder="/items 등 검색"
        />
        {selected ? (
          <pre>{JSON.stringify(selected, null, 2)}</pre>
        ) : null}
      </div>
    );
  }

비고

- `get-endpoints.json`의 스키마는 `{ path: string; tag?: string; summary?: string }[]` 입니다. 현재는 `path`만 채워집니다.
- `--emit-components`로 생성되는 템플릿은 각 리소스의 쿼리 훅(`use<Resource><Resource>GetQuery`)을 사용하도록 구성됩니다.
  - 훅 및 요청/응답 타입은 템플릿 단계에서 포괄적(`any`)으로 두며, 실제 리소스에 맞춰 보완하세요.
  - 기본 레이블은 `code - name` → `code` → `name` → `id` 순으로 구성합니다.
