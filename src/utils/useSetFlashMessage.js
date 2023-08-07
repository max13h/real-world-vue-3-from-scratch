import { useFlashMessageStore } from "../store/flashMessage";

export function useSetFlashMessage(status, message) {
  const flashMessageStore = useFlashMessageStore()

  const resetTimeout = () => {
    if (flashMessageStore.timeoutID) {
      clearTimeout(flashMessageStore.timeoutID)
    }
  }

  const resetAnimation = () => {
    if (flashMessageStore.DOMElement) {
      const el = flashMessageStore.DOMElement
      el.style.animation = ''
      el.offsetWidth
      el.style.animation = '3500ms flashMessage '
    }
  }

  resetTimeout()
  resetAnimation()

  flashMessageStore.flashMessage = message
  flashMessageStore.statusMessage = status

  const timeoutID = setTimeout(() => {
    flashMessageStore.flashMessage = null
    flashMessageStore.status = null
    flashMessageStore.DOMElement = null
  }, 3500);

  flashMessageStore.timeoutID = timeoutID
}
