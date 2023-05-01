import { defineStore } from "pinia";
import { USER_TYPE } from "@/enums/userType.enum";
import { LANGUAGE } from "@/enums/language.enum";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuth: false,
    user: {
      id: '',
      name: '',
      type: USER_TYPE.STUDENT, // USER_TYPE enum 둘 중에 하나 쓰면 됨 
      languages: LANGUAGE.JAVASCRIPT // 학습 언어가 여러개면 배열이고 아니면 그냥 문자열
    }
  }),
  getters: {

  },
  actions: {
    authenticate() {
      this.isAuth = true;
    }
  }
})