# 🏗️ Monorepo Project Guide

이 저장소는 터보레포와 npm 워크스페이스로 관리되는 모노레포입니다. 여러 업체용 앱을 동시에 개발하면서도 공통 기능은 공유하도록 설계되었습니다.

---

## 📦 최상위 구조

```
my-monorepo/
├── apps/                # 업체별 앱 소스
│   ├── dev/             # 신규 앱 생성 시 기준이 되는 샌드박스
│   ├── template/        # 기본 템플릿(직접 배포되지는 않음)
│   └── <vendor>/        # 업체별 실제 앱
│
├── packages/
│   └── core/            # 모든 앱이 공유하는 공통 모듈
│
├── scripts/             # 프로젝트 관리 스크립트
├── turbo.json
└── package.json
```

### 앱 생성

```bash
npm run create-app <vendor-name>
```

명령을 실행하면 `apps/<vendor-name>` 디렉터리가 생성되고, `apps/dev` 내용을 기반으로 초기 파일이 세팅됩니다.

---

## 🧱 `packages/core` 구성

`core` 패키지는 앱 간에 공유되는 UI, 훅, 서비스 로직을 담습니다.

```
packages/core/src/
├── api/                 # OpenAPI 기반 API 모듈
├── components/          # 재사용 가능한 UI 컴포넌트
├── handlers/            # (이벤트/서비스별) 도메인 핸들러
├── hooks/
│   ├── api/             # 단일 API 호출을 위한 얇은 React Query 래퍼
│   ├── services/        # 여러 API를 조합해 도메인 데이터를 만드는 로직
│   └── ui/              # UI 상태/컨트롤(모달, 알림 등)을 다루는 훅
├── instance/            # Axios 인스턴스, 인터셉터 설정
└── util/                # 공통 유틸리티
```

- `hooks/api`: API 하나당 하나의 훅을 제공하는 최소 래퍼입니다. (예: `useAuthWhoamiAuthWhoamiGetQuery`)
- `hooks/services`: 여러 API 호출을 조합하거나 선행/후행 호출이 필요한 도메인 로직을 구성합니다. (예: `useWorkOrdersServices`)
- `hooks/ui`: 모달, 알림 등 **UI 상태 훅**을 관리하는 공간입니다.
- `handlers`: 이벤트성 액션(`login`)이나 서비스별 조합 로직을 래핑해 UI에서 바로 사용할 수 있게 합니다. 또한, 업체별로 custom이 될 수 있기때문에, 객체형식으로 만들어야합니다.

이렇게 레이어를 구분하면 단일 API 호출과 복합 도메인 로직, UI 상태 관리가 서로 분리되어 유지보수가 쉽습니다.

---

## 🚀 개발/빌드 스크립트

루트에서 터보 명령을 실행해 모든 워크스페이스를 동시에 제어할 수 있습니다.

| 명령어                | 설명                                       |
| --------------------- | ------------------------------------------ |
| `npm run dev`         | dev 스크립트를 가진 모든 워크스페이스 실행 |
| `npm run build`       | 전체 빌드                                  |
| `npm run lint`        | ESLint 실행                                |
| `npm run check-types` | TypeScript 프로젝트 참조 검사              |
| `npm run format`      | Prettier 포맷                              |

개별 앱만 실행하려면 필터링을 사용하세요.

```bash
turbo run dev --filter=<workspace-name>
# 또는
npm run dev -w apps/<workspace-name>
```

---

## ✅ 작업 시 유의 사항

- 공통 UI/로직은 `packages/core`에 작성합니다.
- 복잡한 도메인 로직은 `hooks/services`나 `handlers`에서 조합하고, 컴포넌트에서는 가공된 데이터만 다루도록 합니다.
- UI 상태 훅(모달, 알림 등)은 `hooks/ui` 아래에 배치합니다.
- 업체별 커스터마이징이 필요할 경우, 공통 핸들러를 래핑한 어댑터를 업체 앱 쪽에 배치합니다.

---

## 🙋 FAQ

**Q. 업체마다 API 조합이 다른데 어떻게 관리하나요?**  
→ `hooks/services`나 `handlers`에서 공통 베이스를 만들고, 업체별 어댑터를 추가해 옵션/매핑만 덮어씁니다.

**Q. UI 동작(모달/토스트)을 어디서 관리하나요?**  
→ `hooks/ui/*`에 UI 상태 훅을 정의하고, 컴포넌트에서 해당 훅을 호출합니다.

**Q. 새 앱에서 공통 기능을 사용하려면?**  
→ `@core/*` 경로로 `packages/core` 모듈을 import 하면 됩니다.

---

필요한 내용이 있으면 README를 계속 보완하며 유지해 주세요! 🙂
