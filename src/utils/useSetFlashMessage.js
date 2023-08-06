import { useFlashMessageStore } from "../store/flashMessage";

export function useSetFlashMessage(status, message) {
  const flashMessageStore = useFlashMessageStore()

  flashMessageStore.flashMessage = message
  flashMessageStore.statusMessage = status

  setTimeout(() => {
    flashMessageStore.flashMessage = ''
    flashMessageStore.status = ''
  }, 3500);

}
