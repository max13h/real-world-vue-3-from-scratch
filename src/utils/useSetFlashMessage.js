export function useSetFlashMessage(GStore, status, message) {
  GStore.flashMessage = message
  GStore.status = status
  setTimeout(() => {
    GStore.flashMessage = ''
    GStore.status = ''
  }, 5000);
}
