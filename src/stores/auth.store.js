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
    async login(userId, userPw) {
      // TODO: apis/auth.api.js에서 axois.js 활용해서 api 콜하는 함수만들어서 여기서 연동하면 됨 
      // const [error, res] = await fetchLoginCheck(userId, userPw);
      // if (!error) {
      //   this.isAuth = res.data;
      // }
      this.isAuth = true;
    },
    logout() {
      // TODO: 여기서도 로그아웃 api 콜 
      this.isAuth= false;
    },
  }
})