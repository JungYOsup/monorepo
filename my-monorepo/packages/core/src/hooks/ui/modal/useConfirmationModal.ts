import { useModal } from "@core/context/modal/ModalContext";

export function useConfirmationModal() {
  const { openModal, closeModal } = useModal();

  return {
    openConfirmationModal: (options: {
      title: string;
      message: string;
      confirmText?: string;
      cancelText?: string;
      onConfirm: () => void;
      onCancel?: () => void;
    }) => {
      openModal("confirmation", {
        ...options,
        onConfirm: () => {
          options.onConfirm();
          closeModal();
        },
        onCancel: () => {
          options.onCancel?.();
          closeModal();
        },
      });
    },
    closeConfirmationModal: closeModal,
  };
}
