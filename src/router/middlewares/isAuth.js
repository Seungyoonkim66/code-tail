import { useAuthStore } from "@/stores/auth.store";

export default async (to, from, next) => {
  const authStore = useAuthStore();
  
  if (authStore.isAuth) {
    return next();
  }

  // await authStore.fetchLoginCheck();
  // await authStore.authenticate(true);
  return next();
};
