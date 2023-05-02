import { useAuthStore } from "@/stores/auth.store";

export default async (to, from, next) => {
  const authStore = useAuthStore();

  console.debug(authStore.isAuth)
  if (authStore.isAuth) {
    return next();
  }

  next({ name:'login' });
};
