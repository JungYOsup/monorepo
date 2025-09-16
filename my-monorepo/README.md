## ✨ 수정된 `README.md`

```md
# 🏗️ Monorepo Template Guide

이 레포는 다수의 회사(업체) 앱을 관리하기 위한 **모노레포 기반 프로젝트 구조**입니다.  
공통 기능은 `core`로 분리하고, 새 앱은 `dev` 디렉토리를 기준으로 자동 생성됩니다.

## 📦 구조 설명

my-monorepo/
├── apps/
│ ├── \_\_template/ ← 개발자 참고용: 템플릿 보관소 (직접 생성에 사용되진 않음)
│ ├── dev/ ← 앱 생성 시 실제 복사 기준이 되는 템플릿
│ ├── company-a/ ← 업체 A의 앱
│ └── company-b/ ← 업체 B의 앱
│
├── packages/
│ └── core/ ← 모든 앱에서 사용하는 공통 코드 (컴포넌트, 유틸, 훅 등)
│
├── scripts/
│ └── create-app.ts ← 신규 업체 앱 생성 CLI 스크립트
│
├── package.json ← npm workspace 및 turbo 설정
└── tsconfig.json ← 전체 설정 공통 적용
```

---

## ✨ 핵심 원칙

### 1. `core`는 공통 기능 저장소입니다.

- 컴포넌트, API 유틸, 훅, 상수 등 반복되는 코드를 `packages/core`에 작성합니다.
- 모든 앱은 이 `core`를 import하여 재사용합니다.

예시:

```tsx
import { Button } from "core/components/Button";
```

---

### 2. `dev`는 새로운 회사 앱의 기준이 됩니다.

- `dev` 디렉토리는 실제 앱 생성 시 복사되는 기준 디렉토리입니다.
- UI 구조, 라우팅 예시, core 활용법 등이 포함되어 있습니다.

> `template`은 개발자가 템플릿을 참고/수정할 때만 사용합니다.

---

## 🚀 새로운 앱 생성 방법

터미널에서 아래 명령어 실행:

```bash
npm run create-app company-c
```

실행 결과:

- `apps/company-c` 디렉토리가 생성됨
- `dev`를 기준으로 파일 복사됨
- `package.json`의 name 필드가 `"company-c"`로 자동 수정됨
- `tsconfig.json`의 paths alias에 `@company-c/*`가 등록됨
- 모든 파일 내 `@template/` import 경로가 `@company-c/`로 자동 치환됨

---

## 🛠 개발 및 실행

루트에서 아래 명령어로 모든 앱의 dev 서버 실행:

```bash
npm run dev
```

특정 앱만 실행하고 싶다면 해당 앱 디렉토리에서 실행:

```bash
cd apps/company-a
npm install
npm run dev
```

또는 루트에서 turbo를 사용해 특정 앱만 실행:

```bash
npx turbo run dev --filter=company-a
```

> 이 명령어는 루트 디렉토리에서 특정 앱만 선택적으로 실행할 때 사용합니다.
> apps/company-a/package.json에 아래처럼 `name`과 `dev` 스크립트가 명시되어 있어야 합니다.

```json
{
  "name": "company-a",
  "scripts": {
    "dev": "vite"
  }
}
```

---

## 📁 core 디렉토리 구성 예시

```
core/
├── components/
│   └── Button.tsx
├── hooks/
│   └── useFetch.ts
├── lib/
│   └── api.ts
└── index.ts               ← export 모듈 관리
```

---

## ✅ 개발 체크리스트

- [x] 공통 기능은 반드시 `core`에 작성
- [x] 새로운 앱은 `create-app` 명령어로 생성
- [x] 템플릿 수정 시 `dev` 디렉토리를 업데이트
- [x] 앱 내부에서 `core` 사용을 테스트할 것
- [x] 모든 앱은 `vite`, `react`, `typescript` 기반

---

## 🙋 FAQ

### Q. 회사마다 UI가 다르면 어떻게 하나요?

> `dev`를 기반으로 만든 후, 각 앱 내부에서 `core` 컴포넌트를 override 하거나 layout만 교체하세요.

### Q. 공통 코드를 수정하면 다른 앱에도 적용되나요?

> 네, `core`를 수정하면 모든 앱에서 적용됩니다.
> 단, 앱마다 다르게 동작시켜야 할 경우 `props`나 `context`로 분기처리하세요.

### Q. 회사마다 비즈니스 로직이 다를 경우?

> Wrapper 패턴을 사용해 core의 기본 로직을 래핑하세요.

예시:

- 공통 로직: `core/business/order.ts`
- 회사 A 래퍼: `apps/company-a/lib/orderLogic.ts`

```ts
// company-a/lib/orderLogic.ts
import { getOrderStatusLabel as baseLabel } from "core/business/order";

export function getOrderStatusLabel(status: string): string {
  if (status === "PAID") return "A사 전용: 결제 완료";
  return baseLabel(status);
}
```

---
