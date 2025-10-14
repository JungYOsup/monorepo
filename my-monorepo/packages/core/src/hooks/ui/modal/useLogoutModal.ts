import { useModal } from "@core/context/modal/ModalContext";

export function useLogoutModal() {
  const { openModal, closeModal } = useModal();

  return {
    openLogoutModal: (onConfirm?: () => void) => {
      openModal("logout-confirmation", {
        title: "로그아웃",
        message: "정말로 로그아웃하시겠습니까?",
        confirmText: "로그아웃",
        cancelText: "취소",
        onConfirm: () => {
          onConfirm?.();
          closeModal();
        },
        onCancel: closeModal,
      });
    },
    closeLogoutModal: closeModal,
  };
}
