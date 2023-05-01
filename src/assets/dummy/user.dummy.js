import { USER_TYPE } from "@/enums/userType.enum";
import { LANGUAGE } from "@/enums/language.enum";

export const dummyUsers = {
  seungyoon: {
    id: 'seungyoon',
    pw: '0000',
    name: '김승윤',
    type: USER_TYPE.STUDENT,
    languages: LANGUAGE.JAVASCRIPT,
  },
  bohyun: {
    id: 'bohyun',
    pw: '1111',
    name: '서보현',
    type: USER_TYPE.INSTRUCTOR,
    languages: LANGUAGE.JAVASCRIPT,
  }
};