import { toast } from "react-toastify";

export const createRequestTimer = () => {
  let warningToastId: string | number | null = null;
  let timeoutId: NodeJS.Timeout | null = null;

  const startTimer = () => {
    timeoutId = setTimeout(() => {
      warningToastId = toast.warning("Waking up the Server! Please be patient it may take up to 30 seconds!..", {
        autoClose: 15000, // 15 seconds
        hideProgressBar: false,
      });
    }, 2000); // 2 seconds
  };

  const clearTimer = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    if (warningToastId) {
      toast.dismiss(warningToastId);
      warningToastId = null;
    }
  };

  return { startTimer, clearTimer };
};
