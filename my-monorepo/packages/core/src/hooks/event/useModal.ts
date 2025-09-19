import { useCallback, useState } from "react";

export interface UseModalReturn {
  opened: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function useModal(initialState: boolean = false): UseModalReturn {
  const [opened, setOpened] = useState(initialState);

  const open = useCallback(() => {
    setOpened(true);
  }, []);

  const close = useCallback(() => {
    setOpened(false);
  }, []);

  const toggle = useCallback(() => {
    setOpened((prev) => !prev);
  }, []);

  return {
    opened,
    open,
    close,
    toggle,
  };
}
