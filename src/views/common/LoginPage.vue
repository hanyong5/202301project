<template>
	<div class="formWrap">
		<form class="login" @submit.prevent="formAction">
			<div>
				<label for="username" class="form-label">아이디</label>
				<input type="text" id="username" v-model="userData.username" class="form-control" />
			</div>
			<div class="mb-3">
				<label for="password" class="form-label">비밀번호</label>
				<input type="text" id="password" v-model="userData.password" class="form-control" />
			</div>
			<button class="btn btn-primary d-block">로그인</button>
		</form>
	</div>
	<div class="btn btn-outline-primary" @click="loginSample">샘플</div>
</template>

<script setup>
import { $axios } from '@/modules/api.js';
const api = import.meta.env.VITE_API_AUTH;
const user = import.meta.env.VITE_BASIC_USER;

console.log(api);
const userData = reactive({
	username: null,
	password: null,
});
const formAction = () => {
	console.log('click');
	$axios
		.post(api + 'api/login', {
			email: userData.username,
			password: userData.password,
		})
		.then(r => {
			console.log(r);
		});
};

const loginSample = () => {
	userData.username = 'eve.holt@reqres.in';
	userData.password = 'cityslicka';
};
</script>

<style lang="scss" scoped>
.formWrap {
	width: 100%;
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	.login {
		width: 400px;
	}
}
</style>
