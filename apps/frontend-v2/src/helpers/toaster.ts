import { toast } from "react-toastify"

export function showToastMessage(
  $message: string,
  type: "success" | "update" | "warn" | "info" | "error" | "loading",
  _isDark?: boolean,
  _autoClose?: boolean

) {
  const MessageToast = $message

  switch (type) {
    case "success":
      toast.success(MessageToast, {
        position: toast.POSITION.BOTTOM_CENTER,
      })
      break
    case "update":
      toast.update(MessageToast, {
        position: toast.POSITION.BOTTOM_CENTER,
      })
      break
    case "warn":
      toast.warn(MessageToast, {
        position: toast.POSITION.BOTTOM_CENTER,
      })
      break
    case "error":
      toast.error(MessageToast, {
        position: toast.POSITION.BOTTOM_CENTER,
      })
      break
    case "info":
      toast.info(MessageToast, {
        position: toast.POSITION.BOTTOM_CENTER,
      })
      break
    case "loading":
      toast.loading(MessageToast, {
        position: toast.POSITION.BOTTOM_CENTER,
      })
      break
  }
}