import { useAdminStore } from "../store/admin";

export function useSetFlashMessage(GStore, status, message) {
  const adminStore = useAdminStore()
  adminStore.flashMessage = message
  adminStore.statusMessage = status
  setTimeout(() => {
    adminStore.flashMessage = ''
    adminStore.status = ''
  }, 5000);
}
