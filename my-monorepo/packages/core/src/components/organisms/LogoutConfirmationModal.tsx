import { ConfirmationModal } from "@core/components/molecules/modal/ConfirmationModal";

export interface LogoutConfirmationModalProps {
  opened: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function LogoutConfirmationModal({
  opened,
  onClose,
  onConfirm,
}: LogoutConfirmationModalProps) {
  const handleLogout = () => {
    // Clear any stored session data
    localStorage.removeItem("userSession");
    sessionStorage.clear();
    onConfirm();
  };

  return (
    <ConfirmationModal
      opened={opened}
      onClose={onClose}
      onConfirm={handleLogout}
      title="로그아웃 확인"
      message="정말 로그아웃 하시겠습니까?"
      description="현재 작업 중인 내용은 자동으로 저장됩니다."
      confirmText="로그아웃"
      cancelText="취소"
      confirmColor="red"
      icon="alertTriangle"
      iconColor="var(--factory-warning)"
    />
  );
}
