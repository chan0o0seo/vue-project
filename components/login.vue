<template>
  <div class="login">
      <div class="login-header">
          <h3 class="h-title">로그인</h3>
      </div>
      <v-form
          ref="loginUserForm"
          autocomplete="off"
          class="form-wrap"
          fast-fail
          validate-on="blur lazy"
          @keypress.enter.prevent
      >
          <div class="form-group">
              <v-label>아이디</v-label>
              <v-text-field
                  v-model="loginUserInfo.acc"
                  :rules="accRules"
                  aria-label="아이디"
                  autocomplete="nope"
                  clearable
                  color="primary"
                  density="comfortable"
                  hide-details="auto"
                  maxlength="60"
                  name="acc"
                  placeholder="이메일 아이디 입력"
                  required
                  variant="outlined"
              ></v-text-field>
          </div>
          <div class="form-group">
                  <v-label>비밀번호</v-label>
                  <v-text-field
                      v-model="loginUserInfo.pin"
                      :rules="pinRules"
                      aria-label="비밀번호"
                      autocomplete="nope"
                      clearable
                      color="primary"
                      density="comfortable"
                      hide-details="auto"
                      maxlength="20"
                      name="pin"
                      placeholder="비밀번호 입력"
                      required
                      type="password"
                      variant="outlined"
                  ></v-text-field>
          </div>
          <div class="form-checkbox">
              <v-checkbox
                  v-model="loginUserInfo.recycle"
                  class="check-all"
                  hide-details="none"
                  label="아이디 저장"
              ></v-checkbox>
          </div>
          <v-btn block color="primary" rounded="lg" size="large" type="submit" variant="flat"> 로그인</v-btn>
      </v-form>
      <div class="link-wrap">
          <RouterLink>회원가입</RouterLink>
          <RouterLink>아이디 찾기·비밀번호 변경</RouterLink>
      </div>
  </div>
  <!-- 잉카인터넷 NOS 모듈 -->
  <NOSComponent ref="NOS_COMPONENT" :keypad="true" vendor="" />
</template>
<script setup>
import { ref, reactive } from 'vue'

const NOS_COMPONENT = ref(null);
const state = reactive({
    dynamicFields: false,
    modelValues: {},
    decryptDebug: '',
    NOS_SERIALIZED: '',
    NOS_INSTANCE: {}
})
const loginUserInfo = reactive({
    acc: '', //이메일주소
    pin: '', //비밀번호
    ecrPin: '', //암호화비밀번호
    recycle: false, //아이디 저장
    keypad: false //보안키패드
})
const pinRules = [(v) => !!v || '비밀번호를 입력해주세요.'] //비밀번호 룰
const accRules = [
    (v) => !!v || '아이디는 필수 입력입니다.',
    (v) => /.+@.+\..+/.test(v) || '이메일 형식으로 입력해주세요.'
]
</script>
<style scoped>
.login {
    position: relative;
    max-width: 58.8rem;
    margin: 0 auto;
    padding: 0;
}
.login .login-header {
    position: relative;
    width: 100%;
    margin-bottom: 4rem;
}
.login .login-header .h-title {
    font-family: OneShinhan,sans-serif;
    font-size: 4rem;
    font-weight: 700;
    color: #111518;
    text-align: center;
}
.login .form-group {
    margin-bottom: 2.4rem;
}
.login .form-group .v-label {
    margin-bottom: .8rem;
    font-size: 1.8rem;
}
.v-label {
    font-size: 1rem;
    line-height: 150%;
    font-weight: 500;
    --v-medium-emphasis-opacity: 1;
    color: rgb(var(--v-theme-lightText));
}
.login .form-group .v-input--density-comfortable {
    --v-input-control-height: 6.4rem;
    --v-input-padding-top: 1.2rem;
}
.v-checkbox .v-selection-control {
    min-height: var(--v-input-control-height);
}

@media only screen and (max-width: 960px) {
    .login {
        width: 100%;
        padding: 0 2.4rem;
    }
}
@media only screen and (max-width: 960px) {
    .login .login-header {
        margin-bottom: 2.4rem;
    }
}
@media only screen and (max-width: 960px) {
    .login .login-header .h-title {
        font-size: 2rem;
    }
}
@media only screen and (max-width: 960px) {
    .login .form-group {
        margin-bottom: 1.6rem;
    }
}

@media only screen and (max-width: 960px) {
    .login .form-group .v-label, .login .form-group .v-text-field input {
        font-size: 1.6rem;
    }
}
@media only screen and (max-width: 960px) {
    .v-label {
        font-size: 1.4rem;
    }
}
@media only screen and (max-width: 960px) {
    .login .form-group .v-input--density-comfortable {
        --v-input-control-height: 3rem;
    }
}

</style>