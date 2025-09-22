import { ConfirmationModal } from "@core/components/molecules/ConfirmationModal";
import { InfoModal } from "@core/components/molecules/InfoModal";
import { useModal } from "@core/context/modal/ModalContext";
import { LogoutConfirmationModal } from "./LogoutConfirmationModal";
import { SettingsModal } from "./SettingsModal";

// Modal Manager 컴포넌트 - 모든 모달을 중앙에서 관리
export function ModalManager() {
  const { modalType, modalData, isOpen, closeModal } = useModal();

  // 모달 타입에 따라 해당 모달 컴포넌트 렌더링
  const renderModal = () => {
    if (!isOpen || !modalType) return null;

    switch (modalType) {
      case "logout-confirmation":
        return (
          <LogoutConfirmationModal
            opened={isOpen}
            onClose={closeModal}
            onConfirm={modalData.onConfirm || closeModal}
          />
        );

      case "settings":
        return <SettingsModal opened={isOpen} onClose={closeModal} />;

      case "confirmation":
        return (
          <ConfirmationModal
            opened={isOpen}
            title={modalData.title || "확인"}
            message={modalData.message || ""}
            confirmText={modalData.confirmText || "확인"}
            cancelText={modalData.cancelText || "취소"}
            onConfirm={modalData.onConfirm || closeModal}
            onCancel={modalData.onCancel || closeModal}
            onClose={closeModal}
          />
        );

      case "info":
        return (
          <InfoModal
            opened={isOpen}
            title={modalData.title || "정보"}
            message={modalData.message || ""}
            confirmText={modalData.confirmText || "확인"}
            onConfirm={modalData.onConfirm || closeModal}
            onClose={closeModal}
          />
        );

      case "work-order-detail":
      case "material-input":
      case "progress-input":
      case "quality-check":
      case "final-report":
        // 작업지시서 관련 모달들은 추후 구현
        // 현재는 기본 확인 모달로 대체
        return (
          <ConfirmationModal
            opened={isOpen}
            title={modalData.title || "작업지시서"}
            message={modalData.message || "해당 기능은 준비 중입니다."}
            confirmText="확인"
            onConfirm={closeModal}
            onClose={closeModal}
          />
        );

      default:
        return null;
    }
  };

  return <>{renderModal()}</>;
}
