import { createContext, ReactNode, useContext, useState } from "react";

// 모달 타입 정의
export type ModalType =
  | "logout-confirmation"
  | "settings"
  | "work-order-detail"
  | "material-input"
  | "progress-input"
  | "quality-check"
  | "final-report"
  | "confirmation"
  | "info"
  | null;

// 모달 데이터 타입 정의
export interface ModalData {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  [key: string]: any; // 추가 데이터를 위한 flexible 타입
}

// Context 타입 정의
interface ModalContextType {
  // 상태
  modalType: ModalType;
  modalData: ModalData;
  isOpen: boolean;

  // 액션
  openModal: (type: ModalType, data?: ModalData) => void;
  closeModal: () => void;
  updateModalData: (data: Partial<ModalData>) => void;
}

// Context 생성
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Provider Props 타입
interface ModalProviderProps {
  children: ReactNode;
}

// Modal Provider 컴포넌트
export function ModalProvider({ children }: ModalProviderProps) {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [modalData, setModalData] = useState<ModalData>({});
  const [isOpen, setIsOpen] = useState(false);

  // 모달 열기
  const openModal = (type: ModalType, data: ModalData = {}) => {
    setModalType(type);
    setModalData(data);
    setIsOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setIsOpen(false);
    setModalType(null);
    setModalData({});
  };

  // 모달 데이터 업데이트
  const updateModalData = (data: Partial<ModalData>) => {
    setModalData((prev) => ({ ...prev, ...data }));
  };

  const value: ModalContextType = {
    modalType,
    modalData,
    isOpen,
    openModal,
    closeModal,
    updateModalData,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

// useModal 커스텀 훅
export function useModal() {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
}
