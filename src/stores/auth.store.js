import { defineStore } from "pinia";

const nullUser = {
  id: '',
  name: '김승윤',
  type: '', // USER_TYPE enum 둘 중에 하나 쓰면 됨 
  languages: '' // 학습 언어가 여러개면 배열이고 아니면 그냥 문자열
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuth: false,
    user: nullUser,
  }),
  getters: {

  },
  actions: {
    authenticate() {
      this.isAuth = true;
    },
    setUser(user) {
      this.user = { ...user };
      delete this.user.pw; // 비밀번호 정보는 들고 있으면 안될 것 같아서 지움  
    },
    logout() {
      this.isAuth = false;
      this.user = nullUser;
    }
  }
})