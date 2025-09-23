import { notifications } from "@mantine/notifications";
import axios from "axios";
import { ErrorResponse } from "react-router-dom";

export const useApiNotification = () => {
  const handleSuccess = (data: unknown) => {
    notifications.show({
      title: "성공",
      message: (data as { message: string }).message,
      color: "green",
    });
  };

  const handleError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const httpStatus = error.response
          ?.status as keyof typeof statusHandlers;
        const errorResponse = error.response?.data as ErrorResponse;
        const httpMessage =
          errorResponse.data?.message || "알 수 없는 오류가 발생했습니다.";

        // 에러 핸들러를 실행하기 전에 httpStatus가 유효한지 확인
        const handler = httpStatus
          ? statusHandlers[httpStatus]
          : statusHandlers.default;
        handler(httpMessage);
        return;
      } else {
        notifications.show({
          title: "서버 연결 오류",
          message: "서버 연결이 원활하지 않습니다.",
          color: "red",
        });
        return;
      }
    } else {
      notifications.show({
        title: "알 수 없는 오류",
        message: "네트워크 연결 오류 또는 기타 오류가 발생했습니다.",
        color: "red",
      });

      return;
    }
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
