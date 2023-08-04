export function useSetFlashMessage(GStore, status, message) {
  GStore.flashMessage = message
  GStore.statusMessage = status
  setTimeout(() => {
    GStore.flashMessage = ''
    GStore.status = ''
  }, 5000);
}
