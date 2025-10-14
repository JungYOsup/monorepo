import { useModal } from "@core/context/modal/ModalContext";

export function useInfoModal() {
  const { openModal, closeModal } = useModal();

  return {
    openInfoModal: (options: {
      title: string;
      message: string;
      confirmText?: string;
      onConfirm?: () => void;
    }) => {
      openModal("info", {
        ...options,
        onConfirm: () => {
          options.onConfirm?.();
          closeModal();
        },
      });
    },
    closeInfoModal: closeModal,
  };
}
