// packages/core/src/tenant/types.ts
export type PageId =
  | "orders/list"
  | "inventory/list"
  | "quality/results"
  | "reports/summary";

type ApiConfig = {
  list?: any;
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
  columns?: Array<{ key: string; label: string; visible?: boolean }>;
  slots?: UISlots;
};

export type PageConfig = UIOptions & { api: ApiConfig };

// “어디가 커스텀됐는지” 기록을 포함
export type TenantConfig = {
  companyName: string;
  pages: Partial<Record<PageId, PageConfig>>;
};
