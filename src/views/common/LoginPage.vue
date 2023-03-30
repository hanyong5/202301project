<template>
	<div>loginpage</div>
  <form class="login" @submit.prevent="formAction">
    <div>
      <label for="username">아이디</label>
      <input type="text" id="username" v-model="userData.username">
    </div>
    <div>
      <label for="password">비밀번호</label>
      <input type="text" id="password" v-model="userData.password">
    </div>
    <button>로그인</button>
  </form>
  {{ user}}
</template>

<script setup>
const api = import.meta.env.VITE_API_AUTH
const user = import.meta.env.VITE_BASIC_USER

console.log(api)
const userData = reactive({
  username:null,
  password:null
})
const formAction = ()=>{
  console.log('click')

}
</script>

<style lang="scss" scoped>
.login{
  @include center-box;
  background: #ccc;
  width: 420px;
  height: 200px;
  border-radius: 10px;
  padding:10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login input{
  background: #fff;
}
</style>
