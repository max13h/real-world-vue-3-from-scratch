import { useFlashMessageStore } from "../store/flashMessage";

export function useSetFlashMessage(status, message) {
  const flashMessageStore = useFlashMessageStore()

  flashMessageStore.flashMessage = message
  flashMessageStore.statusMessage = status

  setTimeout(() => {
    flashMessageStore.flashMessage = null
    flashMessageStore.status = null
  }, 3500);
}
