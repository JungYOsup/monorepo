// packages/core/src/tenant/types.ts
export type PageId = "orders/list" | "reports/summary";

type ApiConfig = {
  primary: string;
  secondary?: string;
  extra?: string[];
  // 테넌트마다 쿼리 파라미터/헤더 주입
  transformRequest?: (init: { params?: any; headers?: any }) => {
    params?: any;
    headers?: any;
  };
  // 응답 스키마가 다를 때 매퍼
  transformResponse?: (raw: unknown) => any;
};

type UISlots = {
  // 테넌트별 슬롯 컴포넌트 주입 (있으면 교체)
  HeaderRightActions?: React.ComponentType<any>;
  RowActions?: React.ComponentType<{ row: any }>;
  FooterExtra?: React.ComponentType<any>;
};

type UIOptions = {
  display: boolean;
  endpoint: string; // 공통 라우팅(표시용/타이틀)
  featureFlags?: Record<string, boolean>; // ex) bulkExport: true
  columns?: Array<{ key: string; label: string; visible?: boolean }>;
  slots?: UISlots;
};

export type PageConfig = UIOptions & { api: ApiConfig };

// “어디가 커스텀됐는지” 기록을 포함
export type TenantConfig = {
  companyName: string;
  pages: Partial<Record<PageId, PageConfig>>;
  // 테넌트 메타 (감사/표시용)
  _customizationManifest?: string[]; // "orders/list.api.primary" 등 경로 목록
};
