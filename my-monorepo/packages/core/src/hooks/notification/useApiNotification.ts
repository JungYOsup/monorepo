import { notifications } from "@mantine/notifications";
import axios, { AxiosError, AxiosResponse } from "axios";

export const useApiNotification = () => {
  const handleSuccess = (data: unknown) => {
    // React Query handlers often receive AxiosResponse
    let message: string | undefined;
    const maybeAxios = data as AxiosResponse<any> | undefined;
    if (
      maybeAxios &&
      typeof (maybeAxios as any)?.status === "number" &&
      typeof (maybeAxios as any)?.headers === "object"
    ) {
      // Looks like AxiosResponse
      const payload = (maybeAxios as AxiosResponse<any>).data;
      message =
        payload?.message ?? (maybeAxios as AxiosResponse<any>).statusText;
    } else if (
      data &&
      typeof (data as any) === "object" &&
      typeof (data as any).message === "string"
    ) {
      message = (data as { message: string }).message;
    }
    notifications.show({
      title: "성공",
      message: message || "요청이 성공적으로 처리되었습니다.",
      color: "green",
    });
  };

  const handleError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      console.log(error);
      const err = error as AxiosError<any>;
      if (err.response) {
        const status = err.response.status as
          | keyof typeof statusHandlers
          | undefined;
        const serverMessage: string | undefined =
          (err.response.data?.message as string | undefined) ??
          (err.response.data?.error as string | undefined);
        const handler = status
          ? (statusHandlers[status] ?? statusHandlers.default)
          : statusHandlers.default;
        handler(
          serverMessage || err.message || "알 수 없는 오류가 발생했습니다."
        );
        return;
      }
      notifications.show({
        title: "서버 연결 오류",
        message: err.message || "서버 연결이 원활하지 않습니다.",
        color: "red",
      });
      return;
    }

    notifications.show({
      title: "알 수 없는 오류",
      message: "네트워크 연결 오류 또는 기타 오류가 발생했습니다.",
      color: "red",
    });
  };

  const statusHandlers = {
    400: (msg: string) =>
      notifications.show({
        title: "잘못된 요청",
        message: msg,
        color: "red",
      }), // 잘못된 클라이언트의 요청
    401: () =>
      notifications.show({
        title: "인증 오류",
        message: "로그인 세션이 만료되었습니다. 다시 로그인 해주세요.",
        color: "red",
      }),
    403: () =>
      notifications.show({
        title: "권한 없음",
        message: "이 작업을 수행할 권한이 없습니다.",
        color: "red",
      }),
    500: () =>
      notifications.show({
        title: "서버 오류",
        message: "서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
        color: "red",
      }),
    default: () =>
      notifications.show({
        title: "알 수 없는 오류",
        message: "네트워크 연결 오류 또는 기타 오류가 발생했습니다.",
        color: "red",
      }),
  };

  return { handleError, handleSuccess };
};
