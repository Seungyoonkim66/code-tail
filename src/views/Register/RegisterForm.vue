<script setup>
import { reactive, ref } from 'vue';
import { USER_TYPE } from '@/enums/userType.enum';
import { LANGUAGE } from '@/enums/language.enum';

const formRef = ref();
const form = reactive({
  name: '',
  id: '',
  pw: '', // TOOD: 이건 암호화해서 받아야 함 
  type: USER_TYPE.STUDENT,
  language: [], // Q: 이거 하나냐 여러개냐 
});

const rules = reactive({
  name: [
    { required: true, message: '사용자 이름을 입력해주세요.', trigger: 'blur' },
  ],
  id: [
    { required: true, message: '사용할 아이디를 입력해주세요.', trigger: 'blur' },
  ],
  pw: [
    { required: true, message: '비밀번호를 입력해주세요.', trigger: 'blur' },
  ],
  type: [
    { required: true, message: '사용자 종류를 선택해주세요.', trigger: 'blur' },
  ],
  language: [
    { required: true, message: '학습할 언어를 선택해주세요.', trigger: 'blur' },
  ],
});

async function submit(formEl) {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

function reset(formEl) {
  if (!formEl) return;
  formEl.resetFields();
}


</script>

<template>
  
  <el-form
    ref="formRef"
    :model="form"
    :rules="rules"
    label-width="120px"
    class="register-form"
    status-icon
    label-position="left"
  >


    <el-form-item label="사용자 이름" prop="name">
      <el-input 
        v-model="form.name"
        placeholder="사용자 이름"
        type="text"
        clearable
        style="width: 50%"
       />
    </el-form-item>

    <el-form-item label="아이디" prop="id">
      <el-input 
        v-model="form.id"
        placeholder="아이디"
        type="text"
        clearable
        style="width: 60%"
       />
    </el-form-item>

    <el-form-item label="비밀번호" prop="pw">
      <el-input 
        v-model="form.pw"
        placeholder="비밀번호"
        show-password
        clearable
        type="password"
        max="16"
        style="width: 60%"
      />
    </el-form-item>

    <el-form-item label="사용자 종류" prop="type">
      <el-radio-group v-model="form.type">
        <el-radio label="학생" :value="USER_TYPE.STUDENT"/>
        <el-radio label="선생님" :value="USER_TYPE.INSTRUCTOR"/>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="학습할 언어" prop="language">
      <el-select
        v-model="form.language"
        multiple
        placeholder="학습할 언어"
        style="width: 100%"
        filterable
        clearable
        no-match-text="지원하지 않는 언어입니다."
      >
        <el-option
          v-for="(lang) in Object.entries(LANGUAGE)"
          :key="lang[0]"
          :label="lang[1]"
          :value="lang[0]"
        />
      </el-select>
    </el-form-item>

    


    <el-form-item>
      <el-button 
        type="primary" 
        @click="submit(formRef)"
      >제출</el-button>
      <el-button @click="reset(formRef)">취소</el-button>
    </el-form-item>


  </el-form>
</template>

<style lang="scss" scoped>
.register-form {
  width: 100%;
}
</style>
