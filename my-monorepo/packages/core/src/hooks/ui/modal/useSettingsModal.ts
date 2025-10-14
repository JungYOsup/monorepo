import { useModal } from "@core/context/modal/ModalContext";

export function useSettingsModal() {
  const { openModal, closeModal } = useModal();

  return {
    openSettingsModal: () => {
      openModal("settings");
    },
    closeSettingsModal: closeModal,
  };
}
