import { USER_TYPE } from '@/enums/userType.enum';

export default [
  {
    id: 'learning',
    name: '학습',
    to: {
      name: 'learning'
    },
    allow: '*',
  },
  {
    id: 'coding',
    name: '코딩',
    to: {
      name: 'coding'
    },
    allow: '*',
  },
  {
    id: 'grading',
    name: '성적',
    to: {
      name: 'grading'
    },
    allow: '*',
  },
  {
    id: 'levelTest',
    name: '테스트',
    to: {
      name: 'levelTest'
    },
    allow: '*',
  },
  {
    id: 'instructor',
    name: '강사',
    to: {
      name: 'instructor'
    },
    allow: [ USER_TYPE.INSTRUCTOR ],
  },
]